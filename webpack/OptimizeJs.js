'use strict';
const { RawSource } = require("webpack-sources");
const serialize = require('serialize-javascript');

module.exports = class OptimizeJsPlugin {
    constructor(options = {}) {
        this.options = options;
        console.log('this.options: ', this.options);
    }

    apply(compiler) {
        const jsRegex = /\.js($|\?)/i;
        const predicate = this.options.predicate || function (pName, cName) {
            return pName === cName
        };

        compiler.plugin('compilation',(compilation) => {
            compilation.plugin("after-optimize-chunk-assets",(chunks) => {
                chunks.forEach((chunk) => {
                    const files = [];
                    chunk.files.forEach(file => {
                        jsRegex.test(file) && files.push(file);
                    });
                    files
                    .filter(fileName => {
                        const shouldOptimize = (!this.options.whiteList || this.options.whiteList.find(function(el) { return predicate(el,fileName);}))
                        && (!this.options.blackList || !this.options.blackList.find(function(el) { return predicate(el,fileName);}));
                        return shouldOptimize;
                    })
                    .forEach(file => {
                        try {
                            const asset = compilation.assets[file];
                            const serializedStr = serialize(asset.source());
                            let output = "Function(\"'use strict';return("+serializedStr.substr(1,serializedStr.length-3)+")\")();"
                            compilation.assets[file] = new RawSource(output);
                        } catch(e) {
                            compilation.errors.push(e);
                        }
                    });
                });
            });
        });
    }
} 