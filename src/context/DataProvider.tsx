import { createContext, useState } from "react"

type ContextType = {
  html: null
  setHtml: any
  css: null
  setCss: any
  js: null
  setJs: any
}

export const DataContext = createContext<ContextType>({
  html: null,
  setHtml: () => {},
  css: null,
  setCss: () => {},
  js: null,
  setJs: () => {},
})

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [html, setHtml] = useState(null)
  const [js, setJs] = useState(null)
  const [css, setCss] = useState(null)

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
