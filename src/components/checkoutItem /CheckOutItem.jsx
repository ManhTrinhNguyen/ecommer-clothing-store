import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckoutItemContainer, ImgContainer, Img, PriceOrQuanityOrName, QuantityContainer, Arrow, Value, RemoveButton } from './checkoutitem.styles'
import { clearItemFromCart, removeItemFromCart, addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

function CheckOutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const { name, imageUrl, price, quantity } = cartItem
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  console.log(cartItems)
  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <Img src={imageUrl} alt={ `${name}`} />
      </ImgContainer>
      <PriceOrQuanityOrName>{name}</PriceOrQuanityOrName>
      <QuantityContainer>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow className='arrow' onClick={addItemHandler}>&#10095;</Arrow>
      </QuantityContainer>
      <PriceOrQuanityOrName>{ price }</PriceOrQuanityOrName>
      <RemoveButton onClick={clearItemHandler} className='remove-button'>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckOutItem