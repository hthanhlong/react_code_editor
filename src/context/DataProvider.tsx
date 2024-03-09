import { createContext, useState } from "react"

type ContextType = {
  html: string
  setHtml: any
  css: string
  setCss: any
  js: string
  setJs: any
}

export const DataContext = createContext<ContextType>({
  html: "",
  setHtml: () => {},
  css: "",
  setCss: () => {},
  js: "",
  setJs: () => {},
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [html, setHtml] = useState("")
  const [js, setJs] = useState("")
  const [css, setCss] = useState("")

  return (
    <DataContext.Provider
      value={{
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataProvider
