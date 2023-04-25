import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";

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
      }, 
      {
        path: "checkout",
        element: <Checkout />
      }
    ]
  }
])

function App() { 
  return <RouterProvider router={router} />
}

export default App;
 