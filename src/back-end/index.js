require('dotenv-flow').config();

const data = require('./information.json');
const aesEncrypt = require('./aes-encrypt');
const lzwEncode = require('./lzw-encode');

const dataToEncrypt = JSON.stringify(data);

// const encrypted = aesEncrypt(dataToEncrypt);

const encryptedRaw = aesEncrypt(dataToEncrypt);
const lzwedEncryptedRaw = lzwEncode(encryptedRaw);
const lzwed = lzwEncode(dataToEncrypt);
const encryptedLzw = aesEncrypt(lzwed);
const lzwedEncryptedLzw = lzwEncode(encryptedLzw);

console.log(`original length = ${dataToEncrypt.length}`);
console.log(`lzw length = ${lzwed.length}`);
console.log('\n------\n');
console.log(`Encripted RAW\n${encryptedRaw.length}\n`, encryptedRaw);
console.log('------');
console.log(`Encripted LZW\n${encryptedLzw.length}\n`, encryptedLzw);
console.log('\n------\n');
console.log(`LZW Encripted RAW\n${lzwedEncryptedRaw.length}\n`, lzwedEncryptedRaw);
console.log('------');
console.log(`LZW Encripted LZW\n${lzwedEncryptedLzw.length}\n`, lzwedEncryptedLzw);
