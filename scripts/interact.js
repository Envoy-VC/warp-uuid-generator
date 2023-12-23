/** @format */

import { WarpFactory } from 'warp-contracts';
import { DeployPlugin } from 'warp-contracts-plugin-deploy';
import { VRFPlugin } from 'warp-contracts-plugin-vrf';

const warp = WarpFactory.forMainnet()
	.use(new DeployPlugin())
	.use(new VRFPlugin());

const address = 'k314LGlPS1o9ByrtBAtOs5ovae6kTYavRfOt-CF4Ul8';

const run = async () => {
	const jwk = await warp.arweave.wallets.generate();

	const contract = warp.contract(address).connect(jwk).setEvaluationOptions({
		allowBigInt: true,
	});

	await contract.writeInteraction({ function: 'write' }, { vrf: true });
	const { cachedValue } = await contract.readState();
	console.log('State before any interactions');
	console.dir(cachedValue.state, { depth: null });
};

run();
