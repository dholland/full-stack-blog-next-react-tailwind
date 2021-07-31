import { useEffect } from "react";
import Prism from "prismjs";
require("prismjs/components/prism-jsx");

export default function BlockSnippet({ language, code }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <pre className="rounded-md">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
