
import "./shop.styles.scss"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../category/Category"
import { Route, Routes } from "react-router-dom"

function Shop() {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop