const config = require('config');
const jwt = require('jsonwebtoken');

const AES_KEY = config.get('aes.key');

module.exports = (data) => {
	return jwt.sign(data, AES_KEY);
};
