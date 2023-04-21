import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "authentication",
        element: <Authentication />
      }
    ]
  }
])

function App() { 
  return <RouterProvider router={router} />
}

export default App;
 