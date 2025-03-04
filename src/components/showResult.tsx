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
    <div className="md:flex-1 md:flex md:flex-col bg-[#282c34] p-2 pt-0">
      <iframe
        className="border bg-[#282c34] border-gray-700 w-full h-[300px] md:h-[500px] p-2 lg:flex-1"
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default Result;
