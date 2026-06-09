const LZString = require('lz-string');

module.exports = (data) => {
	return LZString.compressToEncodedURIComponent(data)
};
