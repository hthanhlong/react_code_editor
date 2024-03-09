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

  const Styles = html || css || js ? {} : { background: "#444857" }

  return (
    <div style={Styles}>
      <iframe
        srcDoc={src}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default Result
