import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"
  import Home from "./Pages/HomePage/Home"
  
  function App() {
    
    // initialize a browser router
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      }
    ])
  
    return (
        <RouterProvider router={router} />
    )
    
  }
  
  export default App
