import React, { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from "../button/Button"
import { CartContext } from '../../context/CartContext'
import { ProductCartContainer, ProductCartFooter, ProductCartName, ProductCartPrice, ProductCartImage } from './productCart.styles';

function ProductCart({ product }) {
  const {addItemToCart} = useContext(CartContext)
  const { name, price, imageUrl } = product
  const addProductToCart = () => {
    addItemToCart(product)
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