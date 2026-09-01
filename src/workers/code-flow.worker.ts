import type { WorkerIncomingMessage } from "../types/worker";

const SCROLL_SPEED_PX = 6;
const VIEWPORT_OFFSET_PX = 950;
const FRAME_INTERVAL_MS = 16;

let position = 0;
let scrollHeight = 0;

onmessage = (event: MessageEvent<WorkerIncomingMessage>) => {
  switch (event.data.type) {
    case "init":
      scrollHeight = event.data.scrollHeight;
      break;

    case "start": {
      const updatePosition = () => {
        position -= SCROLL_SPEED_PX;
        if (position <= -scrollHeight + VIEWPORT_OFFSET_PX) {
          position = 0;
        }
        postMessage({ type: "update", position });
        setTimeout(updatePosition, FRAME_INTERVAL_MS);
      };
      updatePosition();
      break;
    }
  }
};
