import React, {Fragment} from "react"
import CategoryPreview from "../../components/categoryPreview/CategoryPreview"
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/catrgories/categories.selector";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <Fragment>
      {categoriesMap &&
        Object.keys(categoriesMap).map(title => (
            <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
        ))
      }
      </Fragment>
  )
}

export default CategoriesPreview