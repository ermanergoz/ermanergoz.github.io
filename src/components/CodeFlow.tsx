import { useEffect, useRef, useState } from "react";
import "../styles/main.scss";
import sourceCode from "../../source_code.txt";

const CodeFlow = () => {
  const [content, setContent] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null); // Reference to the scrollable content
  const positionRef = useRef(0); // Store the current Y position of the content
  const animationFrameRef = useRef<number | null>(null); // To store the animation frame ID

  useEffect(() => {
    // Fetch the text content
    fetch(sourceCode)
      .then((response) => response.text())
      .then((text) => {
        const extendedContent = text.split("\n"); // No need to repeat here
        setContent(extendedContent);
      });

    // Cleanup on component unmount (cancel any running animation)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (content.length === 0) return; // Ensure content is loaded

    const animate = () => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      // Update the position for smooth scrolling (reverse direction)
      positionRef.current -= 6; // Move upward by decreasing positionRef

      // When it scrolls past the top, reset to the bottom
      if (positionRef.current <= -scrollElement.scrollHeight + 950) {
        positionRef.current = 0; // Reset when content scrolls out of view
      }

      scrollElement.style.transform = `translateY(${positionRef.current}px)`; // Reverse direction

      // Request the next frame of the animation
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [content]); // Only re-run when content changes

  return (
    <div className="code-flow">
      <div ref={scrollRef} className="code-flow__content">
        {content.map((line, index) => (
          <p key={index} className="code-flow__line">
            {line}
          </p>
        ))}
      </div>
      <div className="inner"></div>
    </div>
  );
};

export default CodeFlow;
