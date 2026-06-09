import LZString from 'lz-string';

export default (data) => {
	return LZString.decompressFromEncodedURIComponent(data);
};
