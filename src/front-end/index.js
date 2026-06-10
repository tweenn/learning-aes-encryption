import lzwDecode from './lzw-decode';
import aesDecrypt from './aes-decrypt';

const lzwData = 'IYBgbAJiIEwgxgFkSYAzJYCs6zAIxwDs8ApsDAJwBGAHLQMzVoMyJr505juX6lgiweCEoNyDLKWqUileBEqIIaLPGD00IDttr4I+cfHzwipBmVLwxdGPGohSpWmhi0YDRBVo0XWMWAM+PogMpRQapTCUBC08DAQ2HhelFgyDgxE1CLhCQwgmbTANvhRDPJgaHQQpLAQGjUYpFLQ1AnEwAxgtGqIMGhoYCaUPp71eFj4lZQc5BBYoSQQiWh9YNTBMNSI5NqSIMtEmaQzpESKpIhFBvCZ1HKVZ9LlXgpgMERY-viIC0qkbk41hAU1oEHsW3csCwREGVnIiBI1HMRBMagsIFh+nmI0CmS2EEyIEYJjA8AGpDQ6EkRSQMDSrlI+CkLDwNUQJmYQxoGGyUiA';

const init = async () => {
	const decodedData = lzwDecode(lzwData);
	const decryptedData = await aesDecrypt(decodedData);
	const redecodedData = lzwDecode(decryptedData);
	console.log(redecodedData);
};

init();
