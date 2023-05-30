import "./shop.styles.scss"
import { useEffect } from "react"
import CategoriesPreview from "../categories-preview/CategoriesPreview"
import Category from "../category/Category"
import { Route, Routes } from "react-router-dom"
import { fetchCategoriesStart } from "../../store/catrgories/categories.action"
import { useDispatch } from "react-redux"
function Shop() {
  const dispatch = useDispatch()
    // get Categories
    useEffect(() => {
      dispatch(fetchCategoriesStart())
    }, [])
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
}

export default Shop