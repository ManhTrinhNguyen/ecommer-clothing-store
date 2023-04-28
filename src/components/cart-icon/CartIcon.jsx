import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { CartIconContainer, ShoppingIconStyle, ItemCount } from './cart-icon.styles'

function CartIcon() {
  const { setToggle, cartCount } = useContext(CartContext)
  
  return (
    <CartIconContainer onClick={() => {
        setToggle(prevValue => !prevValue)
      }}>
        <ShoppingIconStyle />
        <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon