/** @format */
import { readFileSync } from 'fs';
import { WarpFactory } from 'warp-contracts';
import { DeployPlugin } from 'warp-contracts-plugin-deploy';
import { VRFPlugin } from 'warp-contracts-plugin-vrf';

import { ArweaveSigner } from 'warp-contracts-plugin-deploy';

const warp = WarpFactory.forMainnet()
	.use(new DeployPlugin())
	.use(new VRFPlugin());

//const key = JSON.parse(readFileSync('key.json').toString());
const contractSrc = readFileSync('contracts/index.js').toString();

const jwk = await warp.arweave.wallets.generate();

const initialState = {
	uuid: '',
};

const { contractTxId } = await warp.deploy({
	wallet: new ArweaveSigner(jwk),
	initState: JSON.stringify(initialState),
	src: contractSrc,
	evaluationManifest: {
		evaluationOptions: {
			allowBigInt: true,
		},
	},
});

console.log(contractTxId);
