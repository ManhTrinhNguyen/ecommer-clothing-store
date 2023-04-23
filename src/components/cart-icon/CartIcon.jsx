import React, { useContext } from 'react'
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg"
import { CartContext } from '../../context/CartContext'

function CartIcon() {
  const { setToggle, cartCount } = useContext(CartContext)
  
  return (
    <div onClick={() => {
      setToggle(prevValue => !prevValue)
    }} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{ cartCount }</span>
    
      
    </div>
  )
}

export default CartIcon