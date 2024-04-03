import About from "./Components/About/About";
import Order from "./Components/Order/Order";
import Navbar from "./Components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <About/>
    },
    {
      path: "order",
      element: <Order/>
    }
  ])
  return(
    <div className="App">
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
