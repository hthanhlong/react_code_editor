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
    <div>
      <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-2 text-white">Result</h2>
        <iframe
          className="w-full h-60 border border-gray-700 rounded-md"
          srcDoc={src}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default Result
