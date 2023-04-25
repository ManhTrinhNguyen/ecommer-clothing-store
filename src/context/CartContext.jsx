import { createContext, useState, useEffect } from "react";

// Add Cart Item Quantity 
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

// Remove Cart Item Quantity 

function removeCartItem(cartItems, productToRemove) {
  const foundCartItem = cartItems.find(item => item.id === productToRemove.id)
  if (foundCartItem.quantity > 1) {
      return cartItems.map(item => item.id === productToRemove.id ? { ...item, quantity: item.quantity - 1 } : item)
  } else {
    return cartItems.filter(item => item.id !== foundCartItem.id)
  }
}

export const CartContext = createContext({
  toggle: false,
  setToggle: () => { },
  cartItems: [],
  cartCount: 0,
  totalPrice: 0
})

export const CartContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
    setTotalPrice(newCartTotal)
  }, [cartItems])

  // add item to cart
  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  // remove item from cart
  function removeItemFromCart(productToRemove) {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }
  // Clear Item from Cart 
  function clearItemFromCart(id) {
    const newCartItem = cartItems.filter(item => {
      return item.id !== id
    })
    return setCartItems(newCartItem)
  }

  const value = { toggle, setToggle, addItemToCart, cartItems, cartCount, clearItemFromCart, removeItemFromCart, totalPrice}
  
  return (
    <CartContext.Provider value={value}>{ children }</CartContext.Provider>
  )
}