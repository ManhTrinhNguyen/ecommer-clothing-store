import React, {useContext} from 'react'
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../context/CartContext'
import { CartDropdownContainer, CartItemStyle, EmptyMessage } from "./cart-dropdown.styles.jsx"
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }
  return (
    <CartDropdownContainer>
      <CartItemStyle>
        {cartItems.length
          ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />))
          : (<EmptyMessage>Your cart is empty</EmptyMessage>)}
      </CartItemStyle>
      <Button onClick={goToCheckoutHandler}>Go to Check Out</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown