const fs = require('fs-extra');
const path = require('node:path');

module.exports = (data) => {
	const dist = path.resolve(__dirname, '../../docs/dataset.json');

	fs.writeJsonSync(dist, data, { spaces: '\t' });
};
