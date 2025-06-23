import { useEffect, useRef, useState } from "react";
import "../styles/main.scss";
import sourceCode from "../../source_code.txt";

interface WorkerUpdateMessage {
  type: "update";
  position: number;
}

const CodeFlow = () => {
  const [content, setContent] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    fetch(sourceCode)
      .then((response) => response.text())
      .then((text) => {
        const extendedContent = text.split("\n");
        setContent(extendedContent);
      });

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  useEffect(() => {
    if (content.length === 0) return;

    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    workerRef.current = new Worker(
      new URL("../utils/codeFlowWorker.ts", import.meta.url)
    );

    workerRef.current.postMessage({
      type: "init",
      scrollHeight: scrollElement.scrollHeight,
    });

    workerRef.current.postMessage({ type: "start" });

    workerRef.current.onmessage = (event: MessageEvent<WorkerUpdateMessage>) => {
      if (event.data.type === "update") {
        const { position } = event.data;
        scrollElement.style.transform = `translateY(${position}px)`;
      }
    };

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate(); // Cleanup the worker
      }
    };
  }, [content]);

  return (
    <div className="code-flow">
      <div ref={scrollRef} className="code-flow__content">
        {content.map((line, index) => (
          <p key={index} className="code-flow__line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CodeFlow;
