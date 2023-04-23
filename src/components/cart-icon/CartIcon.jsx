import React, { useContext } from 'react'
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag (1).svg"
import { ToggleContext } from '../../context/ToggleContext'

function CartIcon() {
  const {setToggle} = useContext(ToggleContext)
  return (
    <div onClick={() => {
      setToggle(prevValue => !prevValue)
    }} className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon