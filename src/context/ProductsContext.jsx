import { createContext, useState } from "react";
import Shop_Data from "../shop-data.json"

export const ProductsContext = createContext({
   products: []
})

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Shop_Data)
  
  const value = {products, setProducts}
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}