import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_SUCCESS,
  KAKAO_REQUEST,
  KAKAO_SUCCESS,
  KAKAO_FAILURE,
  NAVER_REQUEST,
  NAVER_SUCCESS,
  NAVER_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  WITH_DRAWAL_REQUEST,
  WITH_DRAWAL_SUCCESS,
  WITH_DRAWAL_FAILURE,
} from '../reducers/user';

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    console.log('saga logIn');
    const result = yield call(logInAPI, action.data);
    console.log(result.data);
    console.log(typeof result.data);
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOG_IN_FAILURE,
      error: error.response.data,
    });
  }
}

function kakaoAPI() {
  return axios.get('/user/kakao');
}

// const image = await Image.update(
//   {
//     where: {
//       ProfileId : profileId
//     },
//   },
//   {
//     src: req.body.image,
//   }
// );
// await profile.addImages(image);

function* kakao() {
  try {
    console.log('saga kakao');
    const result = yield call(kakaoAPI);
    console.log(result.data);
    console.log(typeof result.data);
    yield put({
      type: KAKAO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: KAKAO_FAILURE,
      error: error.response.data,
    });
  }
}

function naverAPI() {
  return axios.get('/user/naver');
}

function* naver() {
  try {
    console.log('saga naver');
    const result = yield call(naverAPI);
    console.log(result.data);
    console.log(typeof result.data);
    yield put({
      type: NAVER_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: NAVER_FAILURE,
      error: error.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user/signup', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(`🔥🔥🔥🔥🔥🔥🔥🔥result : ${result}`);
    console.log(`${SIGN_UP_SUCCESS} request`);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function withDrawalAPI() {
  return axios.get('/user/withDrawal');
}

function* withDrawal(action) {
  try {
    const result = yield call(withDrawalAPI);
    yield put({
      type: WITH_DRAWAL_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: WITH_DRAWAL_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  return axios.get('/user');
}

function* loadMyInfo() {
  try {
    console.log('saga loadMyInfo');
    const result = yield call(loadMyInfoAPI);
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchWithDrawal() {
  yield takeLatest(WITH_DRAWAL_REQUEST, withDrawal);
}

function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchKakao() {
  yield takeLatest(KAKAO_REQUEST, kakao);
}

function* watchNaver() {
  yield takeLatest(NAVER_REQUEST, naver);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchKakao),
    fork(watchNaver),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchWithDrawal),
    fork(watchLoadMyInfo),
  ]);
}
