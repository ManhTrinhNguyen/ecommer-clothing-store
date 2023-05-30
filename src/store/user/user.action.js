import { USER_ACTION_TYPE } from "./user.types"

export const setCurrentUser = (user) => {
  return {type:USER_ACTION_TYPE.SET_CURRENT_USER, payload: user}
}
export const checkUserSession = () => {
  return {type : USER_ACTION_TYPE.CHECK_USER_SESSION}
}
export const googleSignInStart = () => {
  return {type: USER_ACTION_TYPE.GOOGLE_SIGN_IN_START}
}
export const githubSignInStart = () => {
  return {type: USER_ACTION_TYPE.GITHUB_SIGN_IN_START}
}
export const emailSignInStart = (email, password) => {
  return {type: USER_ACTION_TYPE.EMAIL_SIGN_IN_START, payload: {email, password}}
}
export const signInSuccess = (user) => {
  return {type: USER_ACTION_TYPE.SIGN_IN_SUCCESS, payload: user}
}
export const signInFailed = (error) => {
  return {type: USER_ACTION_TYPE.SIGN_IN_FAILED, payload: error}
}
export const signUpStart = (email, password, displayName) => {
  return {type: USER_ACTION_TYPE.SIGN_UP_START, payload: {email, password, displayName}}
}
export const signUpSuccess = (user, additionalDetails) => {
  return {type: USER_ACTION_TYPE.SIGN_UP_SUCCESS, payload: {user, additionalDetails}}
}
export const signUpFailed = (error) => {
  return {type: USER_ACTION_TYPE.SIGN_IN_FAILED, payload:  error}
}
export const signOutStart = () => {
  return {type : USER_ACTION_TYPE.SIGN_OUT_START}
}
export const signOutSuccess = () => {
  return {type : USER_ACTION_TYPE.SIGN_OUT_SUCCESS}
}
export const signOutFailed = (error) => {
  return { type: USER_ACTION_TYPE.SIGN_OUT_FAILED, error}
}

