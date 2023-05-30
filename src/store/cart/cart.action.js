import { CART_ACTION_TYPE } from "./cart.type";


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

 // add item to cart
 export function addItemToCart(cartItems ,productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd)
  return {type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems }
}

// remove item from cart
export function removeItemFromCart(cartItems, productToRemove) {
  const newCartItems = removeCartItem(cartItems, productToRemove)
  return {type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems}
}
// Clear Item from Cart 
export function clearItemFromCart(cartItems, cartItemToClear) {
  const newCartItems = cartItems.filter(item => {
    return item.id !== cartItemToClear.id
  })
  return { type: CART_ACTION_TYPE.SET_CART_ITEMS, payload: newCartItems}
 
}

export const setIsCartOpen = (isCartOpen) => {
  return {type: CART_ACTION_TYPE.SET_IS_CART_OPEN, payload: isCartOpen}
}




