import { useEffect, useRef, useState } from "react";
import "../styles/main.scss";
import sourceCode from "../../source_code.txt";

const CodeFlow = () => {
  const [content, setContent] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Fetch the text content
    fetch(sourceCode)
      .then((response) => response.text())
      .then((text) => {
        const extendedContent = text.split("\n");
        setContent(extendedContent);
      });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (content.length === 0) return;

    const animate = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      positionRef.current += 6; // Speed of scrolling
      if (positionRef.current >= scrollElement.scrollHeight-950) {
        positionRef.current = 0; // Reset when content scrolls out of view
      }

      scrollElement.style.transform = `translateY(-${positionRef.current}px)`;

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
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
