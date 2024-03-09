import { useState, useEffect, useContext } from "react"
import { DataContext } from "../context/DataProvider"

const Result = () => {
  const [src, setSrc] = useState("")
  const { html, css, js } = useContext(DataContext)

  const srcCode = `
         <html>
             <body>${html}</body>
             <style>${css}</style>
             <script>${js}</script>
         </html>
     `

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode)
    }, 250)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <div className="bg-[#282c34] p-4 m-2 shadow rounded-lg result-area border">
      <h2 className="text-lg font-semibold mb-2 text-white">Result</h2>
      <iframe
        className=" bg-[#282c34] border border-gray-700 rounded"
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        height="95%"
        width="100%"
      />
    </div>
  )
}

export default Result
