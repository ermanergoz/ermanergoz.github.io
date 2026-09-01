import { useEffect, useRef, useState } from "react";
import sourceCode from "../../../source_code.txt";
import type { WorkerUpdateMessage } from "../../types/worker";

function CodeFlow() {
  const [content, setContent] = useState("");
  const scrollRef = useRef<HTMLPreElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(sourceCode, { signal: controller.signal })
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Failed to load source code:", error);
        }
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!content) return;

    const element = scrollRef.current;
    if (!element) return;

    const worker = new Worker(
      new URL("../../workers/code-flow.worker.ts", import.meta.url),
    );
    workerRef.current = worker;

    worker.postMessage({ type: "init", scrollHeight: element.scrollHeight });
    worker.postMessage({ type: "start" });

    worker.onmessage = (e: MessageEvent<WorkerUpdateMessage>) => {
      if (e.data.type === "update") {
        element.style.transform = `translateY(${e.data.position}px)`;
      }
    };

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, [content]);

  return (
    <div
      className="code-flow"
      aria-hidden="true"
      role="presentation"
      tabIndex={-1}
    >
      <pre ref={scrollRef} className="code-flow__content code-flow__line">
        {content}
      </pre>
    </div>
  );
}

export default CodeFlow;
