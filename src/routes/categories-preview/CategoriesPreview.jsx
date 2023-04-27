import React, {useContext, Fragment} from "react"
import { CategoriesContext } from "../../context/CategoriesContext"
import CategoryPreview from "../../components/categoryPreview/CategoryPreview"

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map(title => (
            <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
        ))
      }
      </Fragment>
  )
}

export default CategoriesPreview