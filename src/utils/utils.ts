export function generateRandomMac(): string {
  // Create an array of 6 random bytes
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);

  // Set the "locally administered" bit and ensure it's "unicast"
  // This makes the MAC address "safe" for private/experimental use
  bytes[0] = (bytes[0] & 0xfe) | 0x02;

  // Convert bytes to hex strings and join with colons
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0").toUpperCase())
    .join(":");
}

export function generateFriendlyName(mac: string): string {
  const suffix = mac.replace(/:/g, "").slice(-4).toUpperCase();
  return `Browser-${suffix}`;
}
