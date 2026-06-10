/**
 * This file only exists to validate that the back-end version
 * is exporting the exact same thing from the front-end;
 * So the following data HAVE to be the same as in
 * /src/back-end/information.json
 */

const data = JSON.stringify({
	"inputA": "input A value",
	"inputB": "input B value",
	"inputC": "input C value",
	"selectionA": [
		"option 1",
		"option 2",
		"option 3"
	],
	"selectionB": [
		"option A",
		"option B",
		"option C"
	],
	"complexObjectA": {
		"inputA": "input A value",
		"selectionA": [
			"option 1",
			"option 2",
			"option 3"
		]
	}
});

const AES_ALGORITHM = process.env.FRONT_END_AES_ALGORITHM;
// const AES_ENCODING = process.env.AES_ENCODING;
const AES_KEY = process.env.AES_KEY;
const AES_IV = process.env.AES_IV;

const encoder = new TextEncoder();

export default async () => {
	const importedKey = await crypto.subtle.importKey(
		'raw',
		Buffer.from(AES_KEY),
		{
			name: AES_ALGORITHM,
		},
		false,
		[ 'encrypt' ]
	);

	const encodedMessage = encoder.encode(data);
	const ciphertextBuffer = await crypto.subtle.encrypt(
		{
			name: AES_ALGORITHM,
			// iv: Buffer.from(AES_IV),
			iv: Buffer.from(AES_IV),
		},
		importedKey,
		encodedMessage
	);

	return new Uint8Array(ciphertextBuffer).toHex();
}
