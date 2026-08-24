require('dotenv-flow').config();

const datasets = require('./import-datasets');

const aesEncrypt = require('./aes-encrypt');
const lzwEncode = require('./lzw-encode');
const jwtEncode = require('./jwt-encode');
const jwtCustomEncode = require('./jwt-custom-encode');

const processedDatasets = Object.entries(datasets)
	.map(([key, data]) => {
		const dataset = JSON.stringify(data);

		const LzwRaw = lzwEncode(dataset);
		const AesRaw = aesEncrypt(dataset);
		const LzwAesRaw = lzwEncode(AesRaw);
		const AesLzwRaw = aesEncrypt(LzwRaw);
		const LzwAesLzwRaw = lzwEncode(AesLzwRaw);
		const JwtRaw = jwtEncode(dataset);
		const LzwJwtRaw = lzwEncode(JwtRaw);
		const JwtLzwRaw = jwtEncode(LzwRaw);
		const ExpLzwRaw = jwtCustomEncode(LzwRaw);

		return {
			title: key,
			data: [
				{ Raw: dataset },
				{ LzwRaw },
				{ AesRaw },
				{ LzwAesRaw },
				{ AesLzwRaw },
				{ LzwAesLzwRaw },
				{ JwtRaw },
				{ LzwJwtRaw },
				{ JwtLzwRaw },
				{ ExpLzwRaw }
			]
		};
	});


require('./export-json')(processedDatasets);
