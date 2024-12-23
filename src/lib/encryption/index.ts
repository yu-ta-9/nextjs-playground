import { createHash, randomBytes } from "node:crypto";

/**
 * Generate a secure random string
 * @param length - The number of bytes for the random value (default: 16)
 * @returns Base64 encoded secure random string
 */
export function generateSecureRandomBase64(seed: number): string {
	const length = 16;
	// Convert the seed number to a string
	const seedString = seed.toString();

	// Create a hash from the seed
	const hash = createHash("sha256").update(seedString).digest();

	// Combine the hash with secure random bytes to enhance randomness
	const randomBuffer = randomBytes(length);

	// XOR the random bytes with the hash to produce the final random value
	for (let i = 0; i < randomBuffer.length; i++) {
		randomBuffer[i] ^= hash[i % hash.length];
	}

	// Encode the result in Base64
	return randomBuffer.toString("base64");
}
