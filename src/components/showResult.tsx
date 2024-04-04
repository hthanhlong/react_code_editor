import { useState, useEffect, useContext } from "react";
import { DataContext } from "../context/DataProvider";

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, js } = useContext(DataContext);

  const srcCode = `
         <html>
             <body>${html}</body>
             <style>${css}</style>
             <script>${js}</script>
         </html>
     `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="flex-1 p-2 bg-[#282c34] m-2 rounded flex flex-col">
      <h2 className="text-lg font-semibold mb-2 text-white">Result</h2>
      <iframe
        className="border bg-[#282c34] border-gray-700 rounded flex-1"
        width="100%"
        height="100%"
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default Result;
