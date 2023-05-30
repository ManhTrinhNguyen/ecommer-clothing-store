import { categoriesType } from "./categories.type"

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
}

export function categoriesReducer(state = INITIAL_STATE, action) {
  const { type, payload } = action
  switch (type) {
    case categoriesType.FETCH_CATEGORY_START: 
      return {
        ...state, 
        isLoading: true
      }
    case categoriesType.FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false
      }
    case categoriesType.FETCH_CATEGORY_FAILED: 
      return {
        ...state, 
        error: payload,
        isLoading: false
      }
    default:
      return state
  }
}