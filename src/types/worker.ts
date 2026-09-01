export interface WorkerInitMessage {
  type: "init";
  scrollHeight: number;
}

export interface WorkerStartMessage {
  type: "start";
}

export interface WorkerUpdateMessage {
  type: "update";
  position: number;
}

export type WorkerIncomingMessage = WorkerInitMessage | WorkerStartMessage;
