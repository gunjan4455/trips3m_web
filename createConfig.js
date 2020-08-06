const fs = require('fs');
const _merge = require('lodash/merge');
const configFilePath = 'config/index.js';
const defaultConfig = require('./config/default.js');
const prodEnv = process.env.RAILS_ENV;
const stagEnv = process.env.SITE_URL;

const region = 'us-east-1';

const serviceTableName = 'service-config';
const appName = 'MS-FE';
let variantName = '';
const serviceRegistryTableName = 'service-registry';
let currentEnv = '';

// For Local Testing
// const accessKeyId = process.env.AWS_DYNAMO_ACCESS_KEY_ID || 'AKIA3YRKRIFATET5SU7A';
// const secretAccessKey = process.env.AWS_DYNAMO_SECRET_ACCESS_KEY || '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';

if (prodEnv && prodEnv === 'production') {
  variantName = 'default';
  currentEnv = 'production';
} else if (stagEnv) {
  variantName = stagEnv.split('.')[0];
  currentEnv = 'staging';
} else {
  currentEnv = 'local';
}
//currentEnv = 'staging';
//variantName = 'browsing-demand-dev1';
console.log('Current Environment--', currentEnv);
console.log('Variant Name---', variantName);

// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');

AWS.config.update({
  // accessKeyId,
  // secretAccessKey,
  region
});
// Create the DynamoDB service object
const ddb = new AWS.DynamoDB({ apiVersion: '2012-10-08' });

const params = {
  TableName: serviceTableName,
  Key: {
    'name': { S: appName },
    'variant': { S: variantName }
  }
};

const requiredServices = { 'core': { service: false, registry: false }, 'cms': { service: false, registry: false }, 'browsing': { service: false, registry: false }};

const getDynamoConfig = () => {
  return new Promise(function (resolve, reject) {
    ddb.getItem(params, function (err, data) {
      const dynamoData = {};
      if (err) {
        console.log('Error', err);
      } else {
        const servicesQery = Object.keys(data.Item.services.M).map(key => {
          dynamoData[key === 'core' ? 'api' : key] = {};
          requiredServices[key] && (requiredServices[key].service = true);
          return {
            name: { S: key },
            variant: data.Item.services.M[key]
          };
        });

        const isReqServiceFound = Object.keys(requiredServices).reduce((acc, key) => {
          return acc && requiredServices[key].service;
        }, true);

        if (!isReqServiceFound) {
          const notFoundAPIs = Object.keys(requiredServices).reduce((acc, key) => {
            return acc + (requiredServices[key].service ? '' : ` ${key},`);
          }, '');
          reject(`Following required API not found: ${notFoundAPIs}`);
        }

        const subParams = {
          RequestItems: {
            [serviceRegistryTableName]: {
              Keys: servicesQery
            }
          }
        };
        ddb.batchGetItem(subParams, function (err, iData) {
          if (err) {
            console.log('Error', err);
            reject(err);
          } else {
            iData.Responses[serviceRegistryTableName].forEach(function (element) {
              // sanitize response
              sanitize(element);
              requiredServices[element.name] && (requiredServices[element.name].registry = true);
              const configDetails = element['end-points'];
              const dynamoDataInner = {};
              Object.keys(configDetails).forEach(key => {
                dynamoDataInner[key] = configDetails[key];
              });
              const key = element['name'] === 'core' ? 'api' : element['name'];
              dynamoData[key] = dynamoDataInner;
            });
            const isReqServiceRegistryFound = Object.keys(requiredServices).reduce((acc, key) => {
              return acc && requiredServices[key].registry;
            }, true);

            if (!isReqServiceRegistryFound) {
              const notFoundAPIs = Object.keys(requiredServices).reduce((acc, key) => {
                return acc + (requiredServices[key].registry ? '' : ` ${key},`);
              }, '');
              return reject(`Following required API registry not found: ${notFoundAPIs}`);
            }
            resolve(dynamoData);
          }
        });
      }
    });
  });
};

const sanitize = obj => {
  Object.keys(obj).forEach(key => {
    if (key === 'M' || key === 'S') {
      // do nothing
    } else {
      const M = obj[key]['M'];
      const S = obj[key]['S'];
      obj[key] = M || S;
      if (M) sanitize(obj[key]);
    }
  });
};

const getConfigFile = () => {
  switch (currentEnv) {
    case 'staging':
      return require('./config/dev.config');
    case 'production':
      return require('./config/prod.config');
    default:
      return require('./config/default.js');
  }
};

const writeFile = async (data) => {
  let finalConfig = { ...defaultConfig };
  const server = {
    'server': {
      'host': 'localhost',
      'port': 4000,
      'public': {
        'host': variantName === 'default' ? 'traveltriangle.com': `${variantName}.ttdev.in`
      }
    }
  };

  if (currentEnv !== 'local') {
    finalConfig = _merge(defaultConfig, getConfigFile(), data, server);
  }
  fs.writeFileSync(`./${configFilePath}`, `module.exports = ${JSON.stringify(finalConfig, null, 2)};\n`, 'utf-8');
};

const createConfigFile = async () => {
  const config = currentEnv !== 'local' ? await getDynamoConfig() : '';
  await writeFile(config);
};

createConfigFile();

