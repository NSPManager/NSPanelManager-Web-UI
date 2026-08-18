import type { IMessage } from "@stomp/stompjs";
// import root from "@/proto/bundle.js";

import {
  NSPanelConfig,
  NSPanelRoomEntitiesPage,
  NSPanelRoomStatus,
  NSPanelStatusReport,
} from "@/generated/src/proto/protobuf_nspanel";

import { NSPanelEntityState } from "@/generated/src/proto/protobuf_nspanel_entity";

const messageRegistry = {
  NSPanelConfig,
  NSPanelEntityState,
  NSPanelRoomEntitiesPage,
  NSPanelRoomStatus,
  NSPanelStatusReport,
};

export type protoMessage = keyof typeof messageRegistry;

// export type protoMessage =
//   | "NSPanelConfig"
//   | "NSPanelEntityState"
//   | "NSPanelRoomEntitiesPage"
//   | "NSPanelRoomStatus"
//   | "NSPanelStatusReport";

export function convertProtbuf<T>(
  message: IMessage,
  messageName: protoMessage,
): T | undefined {
  const messageType = messageRegistry[messageName];

  try {
    //Get the message body (which is a Base64 string)
    const base64Data = message.body;

    if (!base64Data) {
      console.warn("Received empty message body");
      return;
    }

    // Convert Base64 string to a Uint8Array
    // We use 'atob' to decode the string, then map to bytes
    const binaryString = window.atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }

    //Now decode the raw bytes with Protobuf
    const decoded = messageType.decode(bytes);

    //Convert to a clean object
    const data = decoded as unknown as T;

    return data;
  } catch (err) {
    console.error("Manual Base64 decode failed:", err);
  }
}
