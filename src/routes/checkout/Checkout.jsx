import React, {useContext} from 'react'
import { CartContext } from "../../context/CartContext"
import "./checkout.styles.scss"
import CheckOutItem from '../../components/checkoutItem /CheckOutItem'

function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext)

  //console.log(cartItems)
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => {
        const { id} = item
        return (
          <CheckOutItem key={id} cartItem={item} />
        )
      })}
      <span className='total'>Total Price: { totalPrice }</span>
    </div>
  )
}

export default Checkout