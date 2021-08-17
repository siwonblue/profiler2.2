import { all, fork, put, takeLatest, call, throttle, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILURE,
  DELETE_CONTACT_REQUEST,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
  LOAD_ALL_PROFILES_REQUEST,
  LOAD_ALL_PROFILES_SUCCESS,
  LOAD_ALL_PROFILES_FAILURE,
  LOAD_OTHER_PROFILES_REQUEST,
  LOAD_OTHER_PROFILES_SUCCESS,
  LOAD_OTHER_PROFILES_FAILURE,
  LOAD_ALL_PROFILES_LEN_REQUEST,
  LOAD_ALL_PROFILES_LEN_SUCCESS,
  LOAD_ALL_PROFILES_LEN_FAILURE,
  LOAD_HASHTAG_PROFILES_REQUEST,
  LOAD_HASHTAG_PROFILES_SUCCESS,
  LOAD_HASHTAG_PROFILES_FAILURE,
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_FAILURE,
  ADD_PROFILE_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  DELETE_PROFILE_REQUEST,
  DELETE_PROFILE_SUCCESS,
  DELETE_PROFILE_FAILURE,
  ADD_IMAGE_REQUEST,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAILURE,
  PROFILE_LIKE_REQUEST,
  PROFILE_LIKE_SUCCESS,
  PROFILE_LIKE_FAILURE,
  PROFILE_UNLIKE_REQUEST,
  PROFILE_UNLIKE_SUCCESS,
  PROFILE_UNLIKE_FAILURE,
  ADD_TODAY_REQUEST,
  ADD_TODAY_SUCCESS,
  ADD_TODAY_FAILURE,
  ADD_TOTAL_REQUEST,
  ADD_TOTAL_SUCCESS,
  ADD_TOTAL_FAILURE,
  LOAD_SUGGESTION_SUCCESS,
  LOAD_SUGGESTION_FAILURE,
  LOAD_SUGGESTION_REQUEST,
} from '../reducers/profile';
import {
  ADD_CONTACT_TO_ME,
  ADD_LIKE_TO_ME,
  ADD_PATH_TO_ME,
  DELETE_CONTACT_TO_ME,
  DELETE_LIKING_TO_ME,
} from '../reducers/user';

function loadSuggestionAPI(input) {
  return axios.get(`/suggestion/${encodeURIComponent(input)}`);
}

function* loadSuggestion(action) {
  try {
    // console.log('saga loadSuggestion');
    const result = yield call(loadSuggestionAPI, action.data);
    yield put({
      type: LOAD_SUGGESTION_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SUGGESTION_FAILURE,
      error: err.response.data,
    });
  }
}

function loadAllProfilesAPI(lastId) {
  return axios.get(`/profiles/loadAll?lastId=${lastId || 0}`);
}

function* loadAllProfiles(action) {
  try {
    // console.log('saga loadAllProfiles');
    const result = yield call(loadAllProfilesAPI, action.data);
    yield put({
      type: LOAD_ALL_PROFILES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ALL_PROFILES_FAILURE,
      error: err.response.data,
    });
  }
}

function loadOtherProfilesAPI(data) {
  return axios.post('/profile/loadOther', { profileId: data });
}

function* loadOtherProfiles(action) {
  try {
    // console.log('saga loadOtherProfiles');
    const result = yield call(loadOtherProfilesAPI, action.data);
    yield put({
      type: LOAD_OTHER_PROFILES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_OTHER_PROFILES_FAILURE,
      error: err.response.data,
    });
  }
}

function loadAllProfilesLenAPI() {
  return axios.get('/profiles/loadAllLen');
}

function* loadAllProfilesLen(action) {
  try {
    // console.log('saga loadAllProfiles');
    const result = yield call(loadAllProfilesLenAPI);
    yield put({
      type: LOAD_ALL_PROFILES_LEN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ALL_PROFILES_LEN_FAILURE,
      error: err.response.data,
    });
  }
}

function loadHashtagProfilesAPI(data) {
  return axios.get(`/hashtag/${encodeURIComponent(data)}`);
}

function* loadHashtagProfiles(action) {
  try {
    // console.log('saga loadHashtagProfiles');
    const result = yield call(loadHashtagProfilesAPI, action.data);
    yield put({
      type: LOAD_HASHTAG_PROFILES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HASHTAG_PROFILES_FAILURE,
      error: err.response.data,
    });
  }
}

function addProfileAPI(data) {
  return axios.post('/profile/add', data);
}

function* addProfile(action) {
  try {
    // console.log('saga addProfile');
    const result = yield call(addProfileAPI, action.data);
    yield put({
      type: ADD_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

function profileLikeAPI(data) {
  return axios.patch(`/profile/${data.likedId}/like`, data);
}

function* profileLike(action) {
  try {
    // console.log('saga profileLike');
    const result = yield call(profileLikeAPI, action.data);
    yield put({
      type: PROFILE_LIKE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_LIKE_TO_ME,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROFILE_LIKE_FAILURE,
      error: err.response.data,
    });
  }
}

function profileUnlikeAPI(data) {
  return axios.patch(`/profile/deleteLike`, data);
}

function* profileUnlike(action) {
  try {
    // console.log('saga profileUnlike');
    const result = yield call(profileUnlikeAPI, action.data);
    yield put({
      type: PROFILE_UNLIKE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: DELETE_LIKING_TO_ME,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: PROFILE_UNLIKE_FAILURE,
      error: err.response.data,
    });
  }
}

function editProfileAPI(data) {
  return axios.patch('/profile/edit', data);
}

function* editProfile(action) {
  try {
    // console.log('saga editProfile');
    const result = yield call(editProfileAPI, action.data);
    yield put({
      type: EDIT_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

function addTodayAPI(data) {
  return axios.patch('/profile/today', data);
}

function* addToday(action) {
  try {
    // console.log('saga addToday');
    const result = yield call(addTodayAPI, action.data);
    yield put({
      type: EDIT_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: EDIT_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

//  지울 프로필의 id를 데이터로 보내준다.
function deleteProfileAPI(data) {
  return axios.patch('/profile/delete', data);
}

function* deleteProfile(action) {
  try {
    // console.log('saga deleteProfile');
    const result = yield call(deleteProfileAPI, action.data);
    yield put({
      type: DELETE_PROFILE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_PROFILE_FAILURE,
      error: err.response.data,
    });
  }
}

function addImageAPI(data) {
  return axios.post('/profile/image', data);
}

function* addImage(action) {
  try {
    // console.log('saga addImage');
    const result = yield call(addImageAPI, action.data);
    yield put({
      type: ADD_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_IMAGE_FAILURE,
      error: err.response.data,
    });
  }
}

function addContactAPI(data) {
  return axios.post('/profile/contact', data);
}

function* addContact(action) {
  try {
    // console.log('saga addContact');
    const result = yield call(addContactAPI, action.data);
    yield put({
      type: ADD_CONTACT_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_CONTACT_TO_ME,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_CONTACT_FAILURE,
      error: err.response.data,
    });
  }
}

// 지울 contact의 정보를 담아서 보내준다.
function deleteContactAPI(data) {
  return axios.patch('/profile/deleteContact', data);
}

function* deleteContact(action) {
  try {
    // console.log('saga deleteContact');
    const result = yield call(deleteContactAPI, action.data);
    yield put({
      type: DELETE_CONTACT_SUCCESS,
      data: result.data,
    });
    yield put({
      type: DELETE_CONTACT_TO_ME,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: DELETE_CONTACT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadSuggestion() {
  yield takeLatest(LOAD_SUGGESTION_REQUEST, loadSuggestion);
}

function* watchLoadAllProfiles() {
  yield takeLatest(LOAD_ALL_PROFILES_REQUEST, loadAllProfiles);
}

function* watchLoadAllProfilesLen() {
  yield takeLatest(LOAD_ALL_PROFILES_LEN_REQUEST, loadAllProfilesLen);
}

function* watchLoadOtherProfiles() {
  yield takeLatest(LOAD_OTHER_PROFILES_REQUEST, loadOtherProfiles);
}

function* watchLoadHashtagProfiles() {
  yield takeLatest(LOAD_HASHTAG_PROFILES_REQUEST, loadHashtagProfiles);
}

function* watchAddProfile() {
  yield takeLatest(ADD_PROFILE_REQUEST, addProfile);
}

function* watchEditProfile() {
  yield takeLatest(EDIT_PROFILE_REQUEST, editProfile);
}

function* watchDeleteProfile() {
  yield takeLatest(DELETE_PROFILE_REQUEST, deleteProfile);
}

function* watchAddImage() {
  yield takeLatest(ADD_IMAGE_REQUEST, addImage);
}

function* watchAddContact() {
  yield takeLatest(ADD_CONTACT_REQUEST, addContact);
}

function* watchDeleteContact() {
  yield takeLatest(DELETE_CONTACT_REQUEST, deleteContact);
}

function* watchProfileLike() {
  yield takeLatest(PROFILE_LIKE_REQUEST, profileLike);
}

function* watchProfileUnlike() {
  yield takeLatest(PROFILE_UNLIKE_REQUEST, profileUnlike);
}

function* watchAddToday() {
  yield takeLatest(ADD_TODAY_REQUEST, addToday);
}

export default function* profileSaga() {
  yield all([
    fork(watchAddProfile),
    fork(watchEditProfile),
    fork(watchDeleteProfile),
    fork(watchAddImage),
    fork(watchLoadSuggestion),
    fork(watchLoadAllProfiles),
    fork(watchLoadOtherProfiles),
    fork(watchLoadAllProfilesLen),
    fork(watchLoadHashtagProfiles),
    fork(watchAddContact),
    fork(watchDeleteContact),
    fork(watchProfileLike),
    fork(watchProfileUnlike),
    fork(watchAddToday),
  ]);
}
