let position = 0;
let scrollHeight = 0;

// Define the types of messages exchanged
interface WorkerInitMessage {
  type: "init";
  scrollHeight: number;
}

interface WorkerStartMessage {
  type: "start";
}

type WorkerMessage = WorkerInitMessage | WorkerStartMessage;

onmessage = (event: MessageEvent<WorkerMessage>) => {
  switch (event.data.type) {
    case "init":
      scrollHeight = event.data.scrollHeight;
      break;

    case "start":
      const updatePosition = () => {
        position -= 6; // Move upward by decreasing position

        if (position <= -scrollHeight + 950) {
          position = 0; // Reset when content scrolls out of view
        }

        // Send the updated position to the main thread
        postMessage({ type: "update", position });

        setTimeout(updatePosition, 16); // Roughly 60 FPS
      };

      updatePosition();
      break;

    default:
      break;
  }
};
