import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect, Fragment } from 'react'
import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCart from "../../components/product-card/ProductCart"
import {CategoryTitle, CategoryContainer} from "./category.styles"

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <Fragment>
      <CategoryTitle>{ category.toUpperCase() }</CategoryTitle>
      <CategoryContainer>
        {
          products
            && products.map(product => <ProductCart key={product.id} product={product} />)
        }
    </CategoryContainer>
    </Fragment>
    
  )
}

export default Category

//  Digital Ocena password : #VXSx*4N?67zihm