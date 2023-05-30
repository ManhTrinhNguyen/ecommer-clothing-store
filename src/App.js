import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Navigation from "./routes/navigation/Navigation";
import Authentication from "./routes/authentication/Authentication";
import Checkout from "./routes/checkout/Checkout";
import { Routes, Route } from "react-router-dom";
import { checkUserSession } from "./store/user/user.action";

function App() { 
  const dispatch = useDispatch()
  // get User
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop /> } />
        <Route path="auth" element={ <Authentication />} />
        <Route path="checkout" element={ <Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
 