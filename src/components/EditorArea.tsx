import { useCallback, useContext } from "react";
import Editor from "./Editor";
import { DataContext } from "../context/DataProvider";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

const EditorArea = () => {
  const { setHtml, setCss, setJs } = useContext(DataContext);

  const onChangeHtml = useCallback((value: any) => {
    setHtml(value);
  }, []);

  const onChangeCss = useCallback((value: any) => {
    setCss(value);
  }, []);

  const onChangeJavaScript = useCallback((value: any) => {
    setJs(value);
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Html Editor  */}
        <div className="bg-[#282c34] p-2">
          <h2 className="text-md font-semibold mb-2 text-white">HTML</h2>
          <Editor onChange={onChangeHtml} language={html} />
        </div>

        {/* Css Editor  */}
        <div className="bg-[#282c34] p-2">
          <h2 className="text-md font-semibold mb-2 text-white">CSS</h2>
          <Editor onChange={onChangeCss} language={css} />
        </div>

        {/* JavaScript Editor  */}
        <div className="bg-[#282c34] p-2">
          <h2 className="text-md font-semibold mb-2 text-white">JavaScript</h2>
          <Editor onChange={onChangeJavaScript} language={javascript} />
        </div>
      </div>
    </div>
  );
};

export default EditorArea;
