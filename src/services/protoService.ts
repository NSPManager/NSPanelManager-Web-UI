import type { IMessage } from "@stomp/stompjs";
import root, { type INSPanelConfig } from "../proto/bundle.js";

export type protoMessage =
  | "NSPanelConfig"
  | "NSPanelEntityState"
  | "NSPanelRoomEntitiesPage"
  | "NSPanelRoomStatus"
  | "NSPanelStatusReport";

export function convertProtbuf<T>(
  message: IMessage,
  messageName: protoMessage,
): T | undefined {
  const messageType = (root as Record<string, any>)[messageName];

  try {
    // 1. Get the message body (which is a Base64 string)
    const base64Data = message.body;

    if (!base64Data) {
      console.warn("Received empty message body");
      return;
    }

    // 2. Convert Base64 string to a Uint8Array
    // We use 'atob' to decode the string, then map to bytes
    const binaryString = window.atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    // console.log("--- Correctly Decoded Binary ---");
    // console.log("Binary Length:", bytes.length);

    // 3. Now decode the raw bytes with Protobuf
    const decoded = messageType.decode(bytes);

    // 4. Convert to a clean object
    const config = messageType.toObject(decoded, {
      defaults: true,
      arrays: true,
    }) as T;

    // console.log(`Protobuf ${messageName} decoded`, config);
    return config;
  } catch (err) {
    console.error("Manual Base64 decode failed:", err);
  }
}
