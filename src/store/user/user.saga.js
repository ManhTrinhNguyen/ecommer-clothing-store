import { all, takeLatest, call, put } from "@redux-saga/core/effects";
import { USER_ACTION_TYPE } from "./user.types";
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, signOutSuccess, signOutFailed } from "./user.action";
import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInWithGitHubPopup, createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword, signOutAuthUser } from "../../utils/firebase/Firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Sign in with google 
export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Sign in with Github 
export function* signInWithGitHub() {
  try {
    const { user } = yield call(signInWithGitHubPopup)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Sign in with Email
export function* signInWithEmail({payload: {email, password}}) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password)
    yield call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield put(signInFailed(error))
  }
}

// Sign Up 
export function* signUp({ payload: { email, password, displayName}}) {
  try {
    const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
    yield put(signUpSuccess(user, displayName))
  } catch (error) {
    yield put(signUpFailed(error))
  }
}
// Sign In After Sign up
export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
  yield call(getSnapshotFromUserAuth, user, additionalDetails)
}
// Sign Out
export function* signOut() {
  try {
    yield call(signOutAuthUser)
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailed(error))
  }
}

export function* isUserAuthenicated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth) 
  } catch (error) {
    yield put(signUpFailed(error));  
  }
};

// On Google Start
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// On GitHub Start
export function* onGitHubStart() {
  yield takeLatest(USER_ACTION_TYPE.GITHUB_SIGN_IN_START, signInWithGitHub)
}

//On Email Start
export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail)
}
// On User Sign Up Start
export function* onUserSignUpStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp)
}

// On Sign up Success
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp)
}

//On Sign Out Start
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenicated)
}


export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onGitHubStart),
    call(onUserSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart)
  ])
}



