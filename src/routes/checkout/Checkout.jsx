import React, {useContext} from 'react'
import { CartContext } from "../../context/CartContext"
import CheckOutItem from '../../components/checkoutItem /CheckOutItem'
import { CheckoutContainer, CheckoutHeader, Total, HeaderBlock } from './checkout.styles'

function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext)

  //console.log(cartItems)
  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(item => {
        const { id} = item
        return (
          <CheckOutItem key={id} cartItem={item} />
        )
      })}
      <Total>Total Price: { totalPrice }</Total>
    </CheckoutContainer>
  )
}

export default Checkout