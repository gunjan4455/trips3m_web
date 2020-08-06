const crypto = require("crypto");
const superAgent = require('superagent');

const { encryptParams, decryptResponse } = require('./util');

const baseUrl = 'https://api.paisabazaar.com/';
const siteId = '553179ba-1a67-4e9b-9bca-22ef0301ee30';

export const loanQuote = async (params) => {
    const apiEndpoint = 'loans/v1/quote';
    const encryptedParams = encryptParams(params);
    const resp = await superAgent
        .post(`${baseUrl}${apiEndpoint}`)
        .send({request: encryptedParams})
        .set('X-Site-Id', siteId)
        .set('Content-Type', 'application/json')
        .then(res => {
            //console.log('yay got ' + JSON.stringify(res.body));
            return {
                "status": res.body.status,
                "statusCode": res.body.statusCode,
                "statusMessage": res.body.statusMessage,
                response: JSON.parse(decryptResponse(res.body.response))
            }
        })
        .catch((err, res) => {
           console.log('err: ', err);
           return err;
        });
    return resp;    
}

export const applyQuote = async (params) => {
    const apiEndpoint = 'loans/v1/quote/apply';
    params.bankId = crypto.createHash('md5').update(params.bankId).digest("hex");
    const encryptedParams = encryptParams(params);
    const resp = await superAgent
        .post(`${baseUrl}${apiEndpoint}`)
        .send({request: encryptedParams})
        .set('X-Site-Id', siteId)
        .set('Content-Type', 'application/json')
        .then(res => {
            //console.log('yay got ' + JSON.stringify(res.body));
            return {
                "status": res.body.status,
                "statusCode": res.body.statusCode,
                "statusMessage": res.body.statusMessage,
                response: JSON.parse(decryptResponse(res.body.response))
            }
        })
        .catch((err, res) => {
           console.log('err: ', err);
           return err;
        });
    return resp;
}


export const getCities = async () => {
    const apiEndpoint = 'core/v1/city';
    return await superAgent
        .get(`${baseUrl}${apiEndpoint}`)
        .set('X-Site-Id', siteId)
        .set('Content-Type', 'application/json')
        .then(res => {
            return res.body;
        })
        .catch((err, res) => {
           console.log('err: ', err);
           return err;
        });
}
