import data from './dataset.json';

const $ = window.$ || window.jQuery;
const target = $('tbody').first();

const appendIntoTable = (title, length, content) => {
	const tr = $('<tr>');
	const tdTitle = $(`<th scope="row">${title}</th>`);
	const tdLength = $(`<td>${length}</td>`);
	const tdContent = $(`<td>${content}</td>`);

	tr.append(tdTitle);
	tr.append(tdLength);
	tr.append(tdContent);

	target.append(tr);
};

const processedData = data
	.forEach((dataset) => {
		dataset.forEach((dataSubSet) => {
			Object.entries(dataSubSet)
				.forEach(([key, value]) => {
						appendIntoTable(
							key.match(/.{1,3}/g).join(' -> '),
							value.length,
							value.match(/.{1,90}/g).join('<br />')
						);
					});
		});
	});
