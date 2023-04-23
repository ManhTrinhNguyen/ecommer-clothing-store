import React, { useContext } from 'react';
import "./productCart.styles.scss"
import Button from "../button/Button"
import { CartContext } from '../../context/CartContext'

function ProductCart({ product }) {
  const {addItemToCart} = useContext(CartContext)
  const { name, price, imageUrl } = product
  const addProductToCart = () => {
    addItemToCart(product)
  }
  return (
    <div  className='product-cart-container'>
      <img src={imageUrl} alt={ `${name} ` } />
      <div className='footer'>
        <span className='name'>{ name }</span>
        <span className='price'>{ price }</span>
      </div>
      <Button onClick={addProductToCart} buttonType="inverted">Add to cart</Button>
    </div>
  )
}

export default ProductCart