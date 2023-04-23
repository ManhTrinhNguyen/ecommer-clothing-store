import React, {useContext} from "react"
import { ProductsContext } from "../../context/ProductsContext"
import ProductCart from "../../components/product-card/ProductCart"
import "./shop.styles.scss"

function Shop() {
  const { products } = useContext(ProductsContext)

  return (
    <div className="products-container">
      {
        products.map(product => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))
      }
    </div>
  )
}

export default Shop