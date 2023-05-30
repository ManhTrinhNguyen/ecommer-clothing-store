import { useParams } from 'react-router-dom'
import { useState, useEffect, Fragment } from 'react'
import ProductCart from "../../components/product-card/ProductCart"
import { CategoryTitle, CategoryContainer } from "./category.styles"
import { useSelector } from 'react-redux'
import { selectCategoriesMap } from '../../store/catrgories/categories.selector'
import { selectCategoriesIsLoading } from '../../store/catrgories/categories.selector'
import Spinner from '../../spinner/spinner'

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)
  const isLoading = useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category])
  }, [categoriesMap, category])

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {
            products
              && products.map(product => <ProductCart key={product.id} product={product} />)
          }
        </CategoryContainer>
      )}
      
    </Fragment>
    
  )
}

export default Category

//  Digital Ocena password : #VXSx*4N?67zihm