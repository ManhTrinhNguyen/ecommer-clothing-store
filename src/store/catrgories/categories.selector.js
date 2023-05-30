import { createSelector } from "reselect";

const selectCatrgoryReducer = (state) => state.categories

const selectCategories = createSelector(
  [selectCatrgoryReducer],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category
    acc[title.toLowerCase()] = items
    return acc;
  },{})
)
export const selectCategoriesIsLoading = createSelector(
  [selectCatrgoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
)


