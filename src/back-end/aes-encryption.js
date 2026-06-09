const config = require('config');
const crypto = require('node:crypto');

const AES_ALGORITHM = config.get('aes.algorithm');
const AES_ENCODING = config.get('aes.encoding');
const AES_KEY = config.get('aes.key');
const AES_IV = config.get('aes.iv');

module.exports = (data) => {
	const cipher = crypto.createCipheriv(AES_ALGORITHM, Buffer.from(AES_KEY), Buffer.from(AES_IV));
	let encrypted = cipher.update(data, 'utf-8', AES_ENCODING);
	encrypted += cipher.final(AES_ENCODING);
	encrypted += cipher.getAuthTag().toString(AES_ENCODING);

	return encrypted;
};
