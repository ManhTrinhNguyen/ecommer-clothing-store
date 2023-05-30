import { categoriesType } from "./categories.type"

export function fetchCategoriesStart() {
  return {type: categoriesType.FETCH_CATEGORY_START}
} 
export function fetchCategoriesSucceed(categoriesArray) {
  return {type: categoriesType.FETCH_CATEGORY_SUCCESS, payload: categoriesArray}
} 
export function fetchCategoriesFailed(error) {
  return {type: categoriesType.FETCH_CATEGORY_FAILED, payload: error}
} 
