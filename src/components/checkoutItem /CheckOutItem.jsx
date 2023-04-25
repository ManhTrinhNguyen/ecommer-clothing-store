import React, {useContext} from 'react'
import "./checkoutitem.styles.scss" 
import { CartContext } from '../../context/CartContext'

function CheckOutItem({ cartItem }) {
  const { name, imageUrl, price, quantity, id } = cartItem
  const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)
  const clearItemHandler = () => clearItemFromCart(id)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={ `${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{ price }</span>
      <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
    </div>
  )
}

export default CheckOutItem