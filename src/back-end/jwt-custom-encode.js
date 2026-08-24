const jwtEncode = require('./jwt-encode');

module.exports = (data) => {
	const jwt = jwtEncode(data).split('.');
	return `${jwt[0]}.${data}.${jwt[2]}`;
};
