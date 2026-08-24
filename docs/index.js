import datasets from './dataset.js';

const $ = window.$ || window.jQuery;

const addTabButton = (title, isActive = false) => {
	const target = $('#dataset-tab').first();

	const template = `
	<li class="nav-item" role="presentation">
		<button
			class="nav-link ${isActive && 'active'}"
			id="tab-${title}"
			data-bs-toggle="pill"
			data-bs-target="#tab-pane-${title}"
			type="button"
			role="tab"
			aria-controls="tab-pane-${title}"
			${isActive && 'aria-selected="true"'}
		>${title}</button>
	</li>
	`;

	target.append($(template));
};

const addTab = (title, tabIndex = -1) => {
	const target = $('#dataset-tab-content').first();

	const template = `
	<div
		class="tab-pane fade ${tabIndex === 0 && 'show active'}"
		id="tab-pane-${title}"
		role="tabpanel"
		aria-labelledby="tab-${title}"
		tabindex="${tabIndex}"
	>
		<table id="table-${title}" class="table">
			<thead>
				<tr>
					<th scope="col">Process</th>
					<th scope="col">Length</th>
					<th scope="col">Content</th>
				</tr>
			</thead>
			<tbody>
			</tbody>
		</>
	</div>
	`;

	target.append($(template));
};

const appendIntoTable = (table, title, length, content) => {
	const target = $(`#table-${table} tbody`).first();

	const tr = $('<tr>');
	const tdTitle = $(`<th scope="row">${title}</th>`);
	const tdLength = $(`<td>${length}</td>`);
	const tdContent = $(`<td>${content}</td>`);

	tr.append(tdTitle);
	tr.append(tdLength);
	tr.append(tdContent);

	target.append(tr);
};

const processedData = datasets
	.forEach((dataset, key) => {
		addTabButton(dataset.title, key === 0);
		addTab(dataset.title, key);

		dataset.data.forEach((dataSubSet) => {
			Object.entries(dataSubSet)
				.forEach(([key, value]) => {
						appendIntoTable(
							dataset.title,
							key.match(/.{1,3}/g).join(' -> '),
							value.length,
							value.match(/.{1,90}/g).join('<br />')
						);
					});
		});
	});
