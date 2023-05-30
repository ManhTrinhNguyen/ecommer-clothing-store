import React from 'react'
import ProductCart from '../product-card/ProductCart'
import { CategoryPreviewContainer, Title, Preview } from './categoryPreview.styles'
import { selectCategoriesIsLoading } from '../../store/catrgories/categories.selector'
import Spinner from '../../spinner/spinner'
import { useSelector } from 'react-redux'
function CategoryPreview({ title, products }) {
  const isLoading = useSelector(selectCategoriesIsLoading)
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{ title.toUpperCase() }</Title>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
        {
          products
            .filter((_, idx) => idx < 4)
            .map(product => (
              <ProductCart key={product.id} product={product} />
            ))
        }
      </Preview>
      )}
      
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview