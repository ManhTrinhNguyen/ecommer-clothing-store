import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { CheckoutItemContainer, ImgContainer, Img, PriceOrQuanityOrName, QuantityContainer,Arrow, Value, RemoveButton } from './checkoutitem.styles'

function CheckOutItem({ cartItem }) {
  const { name, imageUrl, price, quantity, id } = cartItem
  const { clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)
  const clearItemHandler = () => clearItemFromCart(id)
  const removeItemHandler = () => removeItemFromCart(cartItem)
  const addItemHandler = () => addItemToCart(cartItem)
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