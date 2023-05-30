import React from 'react'
import CartItem from '../cart-item/CartItem'
import { CartDropdownContainer, CartItemStyle, EmptyMessage } from "./cart-dropdown.styles.jsx"
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { selectCartItems } from '../../store/cart/cart.selector'
import {useSelector} from "react-redux"

function CartDropdown() {
  const  cartItems  = useSelector(selectCartItems)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }
  return (
    <CartDropdownContainer>
      <CartItemStyle>
        {cartItems
          ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
          : (<EmptyMessage>Your cart is empty</EmptyMessage>)}
      </CartItemStyle>
      <Button onClick={goToCheckoutHandler}>Go to Check Out</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown