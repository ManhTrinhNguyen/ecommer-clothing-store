import React from 'react'
import { CartIconContainer, ShoppingIconStyle, ItemCount } from './cart-icon.styles'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector'
import { useDispatch, useSelector } from 'react-redux'

function CartIcon() {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(selectIsCartOpen)
  const cartCount = useSelector(selectCartCount)
  return (
    <CartIconContainer onClick={() => {
        dispatch(setIsCartOpen(!isCartOpen))
      }}>
        <ShoppingIconStyle />
        <ItemCount>{ cartCount }</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon 