import CodeMirror from "@uiw/react-codemirror";

type typeEditor = {
  onChange: any;
  language: any;
};

function Editor({ onChange, language }: typeEditor) {
  return (
    <div>
      <CodeMirror
        className="text-sm border-gray-700 border"
        height="342px"
        theme="dark"
        extensions={[language(true)]}
        onChange={onChange}
      />
    </div>
  );
}
export default Editor;
