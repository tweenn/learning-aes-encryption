const jwtEncode = require('./jwt-encode');

module.exports = (data) => {
	const jwt = jwtEncode(data).split('.');
	return `${data}.${jwt[2]}`;
};
