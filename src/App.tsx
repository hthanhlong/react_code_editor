import { RouterProvider } from "react-router-dom";
import DataProvider from "./context/DataProvider";
import router from "./Routes";

function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
