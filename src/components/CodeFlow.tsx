import { useEffect, useState } from "react";
import "../styles/main.scss";
import sourceCode from "../../source_code.txt";

const CodeFlow = () => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    fetch(sourceCode)
      .then((response) => response.text())
      .then((text) => {
        const extendedContent = text.repeat(500);
        setContent(extendedContent);
      });
  }, []);

  return (
    <div className="code-flow">
      <div className="code-flow__content">
        {content.split("\n").map((line, index) => (
          <p key={index} className="code-flow__line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CodeFlow;
