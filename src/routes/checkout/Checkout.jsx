import React from 'react'
import CheckOutItem from '../../components/checkoutItem /CheckOutItem'
import { CheckoutContainer, CheckoutHeader, Total, HeaderBlock } from './checkout.styles'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux'
import PaymentForm from '../../components/payment-form/PaymentForm'

function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

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
      <Total>Total Price: {totalPrice}</Total>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout