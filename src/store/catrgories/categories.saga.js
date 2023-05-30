import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase"
import { fetchCategoriesSucceed, fetchCategoriesFailed } from "../catrgories/categories.action"
import { categoriesType } from "./categories.type";

export function* fetchCategoriesAysnc() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments, "categories")
    yield put(fetchCategoriesSucceed(categoriesArray))
  } catch (error) {
    yield put(fetchCategoriesFailed(error))
  }
}
export function* onFetchCategories() {
  yield takeLatest(categoriesType.FETCH_CATEGORY_START, fetchCategoriesAysnc)
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}