import React, {useContext} from 'react'
import Button from '../button/Button'
import "./cart-dropdown.styles.scss"
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

function CartDropdown() {
  const { cartItems } = useContext(CartContext)
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />) }
      </div>
      <Link className='checkout-btn' to="/checkout">Go to Check Out</Link>
    </div>
  )
}

export default CartDropdown