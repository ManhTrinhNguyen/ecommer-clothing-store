import { createContext, useState, useEffect } from "react";

function addCartItem(cartItems, productToAdd) {
  // find if cartITems contain productToAdd
  const foundCartItem = cartItems.find(item => item.id === productToAdd.id)

  if (foundCartItem) {
    return cartItems.map(item => item.id === productToAdd.id
      ? { ...item, quantity: item.quantity + 1 }
      : item
    )
  }

 return [...cartItems, {...productToAdd, quantity: 1}]
}

 
export const CartContext = createContext({
  toggle: false,
  setToggle: () => { },
  cartItems: [],
  cartCount: 0
})

export const CartContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }


  const value = { toggle, setToggle, addItemToCart, cartItems, cartCount}
  
  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  )
}