const AES_ALGORITHM = process.env.FRONT_END_AES_ALGORITHM;
const AES_ENCODING = process.env.AES_ENCODING;
const AES_KEY = process.env.AES_KEY;
const AES_IV = process.env.AES_IV;

const decoder = new TextDecoder();

export default async (data) => {
	const importedKey = await crypto.subtle.importKey(
		'raw',
		Buffer.from(AES_KEY),
		{
			name: AES_ALGORITHM,
		},
		false,
		[ 'decrypt' ]
	);

	const decryptedBuffer = await crypto.subtle.decrypt(
		{
			name: AES_ALGORITHM,
			iv: Buffer.from(AES_IV)
		},
		importedKey,
		Buffer.from(data, AES_ENCODING)
	);

	return decoder.decode(decryptedBuffer);
};
