const crypto = require("crypto");
const CIPHER = `aes-128-cbc`;
const SECRET_KEY = 'qUNd2dD5nHNWi0xB'; // private key provided by
//paisabazaar
const SECRET_KEY_IV = 'NwW52HFkOl1azY8C'; // private key IV provided by paisabazaar

export const encryptParams = (params) => {
    const STR_TO_ENCRYPT = JSON.stringify(params);
    let padding = 16 - (STR_TO_ENCRYPT.length % 16);
    let plainStrToEncrypt = STR_TO_ENCRYPT + (' ').repeat(padding);
    let cipher = crypto.createCipheriv(CIPHER, SECRET_KEY, SECRET_KEY_IV);
    return cipher.update(plainStrToEncrypt, 'utf8', 'base64') + cipher.final('base64');
}

export const decryptResponse = (resp) => {
    //Decrypt string
    let decipher = crypto.createDecipheriv(CIPHER, SECRET_KEY, SECRET_KEY_IV);
    decipher.setAutoPadding(true);
    const dStr = decipher.update(resp, 'base64', 'utf8');
    return dStr;
}