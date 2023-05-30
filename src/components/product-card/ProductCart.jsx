import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button"
import { useDispatch, useSelector } from 'react-redux';
import { ProductCartContainer, ProductCartFooter, ProductCartName, ProductCartPrice, ProductCartImage } from './productCart.styles';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from "../../store/cart/cart.selector"

function ProductCart({ product }) {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const { name, price, imageUrl } = product
  const addProductToCart = () => {
    return dispatch(addItemToCart(cartItems ,product))
  }
  return (
    <ProductCartContainer>
      <ProductCartImage src={imageUrl} alt={ `${name} ` } />
      <ProductCartFooter>
        <ProductCartName>{ name }</ProductCartName>
        <ProductCartPrice >{ price }</ProductCartPrice>
      </ProductCartFooter>
      <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
    </ProductCartContainer>
  )
}

export default ProductCart