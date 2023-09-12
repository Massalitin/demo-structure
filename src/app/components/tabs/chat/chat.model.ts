export interface IChatMessage {
  id: string;
  timestamp: number;
  content: string;
  author: string;
  type: MessageType;
}

export enum MessageType {
  INBOUND = 'inbound',
  OUTBOUND = 'outbound',
  SYSTEM = 'system',
}
