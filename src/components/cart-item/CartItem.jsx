import React from 'react'
import { CartItemContainer, Name, CartItemImg, ItemDetails } from './cart-item.styles'

function CartItem({ cartItem }) {
  const {name, quantity, price, imageUrl} = cartItem
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItem