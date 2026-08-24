const fs = require('fs-extra');
const path = require('node:path');

module.exports = (data) => {
	const dist = path.resolve(__dirname, '../../docs/dataset.js');

	const template = `export default ${JSON.stringify(data, null, '\t')};`

	fs.writeFileSync(dist, template);
};
