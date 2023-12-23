/** @format */
// import { SmartWeaveGlobal } from 'warp-contracts';
// const SmartWeave = new SmartWeaveGlobal();

function generateSecureUUID(data) {
	let randomBigInt = BigInt(data);

	const byteArray = [];
	for (let i = 0; i < 16; i++) {
		byteArray.unshift(Number(randomBigInt & BigInt(0xff)));
		randomBigInt >>= BigInt(8);
	}

	// Set the version (4 for randomly generated UUID) and variant bits
	byteArray[6] = (byteArray[6] & 0x0f) | 0x40; // version 4
	byteArray[8] = (byteArray[8] & 0x3f) | 0x80; // variant bits

	// Convert to hexadecimal and format as a standard UUID
	const uuid = byteArray
		.map((byte) => byte.toString(16).padStart(2, '0'))
		.join('');
	return `${uuid.slice(0, 8)}-${uuid.slice(8, 12)}-${uuid.slice(
		12,
		16
	)}-${uuid.slice(16, 20)}-${uuid.slice(20)}`;
}

export async function handle(state, action) {
	const input = action.input;

	switch (input.function) {
		case 'write':
			const randomNumber = SmartWeave.vrf.data.bigint;
			const uuid = generateSecureUUID(randomNumber);
			state.uuid = uuid;
			return { state };

		default:
			throw new ContractError(
				`No function supplied or function not recognised: "${input.function}"`
			);
	}
}
