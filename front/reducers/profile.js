import produce from 'immer';

export const initialState = {
  allProfilesLen: null,
  allProfiles: [],
  hashtagProfiles: [],
  contacts: [],
  liking: [],
  suggestion: [],
  hasMoreProfiles: true, // 인피니트 스크롤링 변수
  today: null,
  total: null,
  imagePath: null,
  intro: null,
  profile: null,
  loadAllProfilesLenLoading: false, // 전체 프로필 수 불러오기
  loadAllProfilesLenDone: false,
  loadAllProfilesLenError: null,
  addTodayLoading: false, // today 추가 시도중
  addTodayDone: false,
  addTodayError: null,
  addTotalLoading: false, // total 추가 시도중
  addTotalDone: false,
  addTotalError: null,
  resetImageLoading: false, // 이미지 리셋
  resetImageDone: false,
  resetImageError: null,
  profileLikeLoading: false, // 프로필 좋아요 시도중
  profileLikeDone: false,
  profileLikeError: null,
  profileUnlikeLoading: false, // 프로필 좋아요 취소 시도중
  profileUnlikeDone: false,
  profileUnlikeError: null,
  loadSuggestionLoading: false, // 추천 로드 시도중
  loadSuggestionDone: false,
  loadSuggestionError: null,
  loadAllProfilesLoading: false, // 모든 프로필 로드 시도중
  loadAllProfilesDone: false,
  loadAllProfilesError: null,
  loadOtherProfilesLoading: false, // 다른 사람 프로필 로드 시도중
  loadOtherProfilesDone: false,
  loadOtherProfilesError: null,
  loadHashtagProfilesLoading: false, // 태그 검색 프로필 로드 시도중
  loadHashtagProfilesDone: false,
  loadHashtagProfilesError: null,
  addContactLoading: false, // 컨택 추가 시도중
  addContactDone: false,
  addContactError: null,
  deleteContactLoading: false, // 컨택 삭제 시도중
  deleteContactDone: false,
  deleteContactError: null,
  addProfileLoading: false, // 프로필 추가 시도중
  addProfileDone: false,
  addProfileError: null,
  editProfileLoading: false, // 프로필 수정 시도중
  editProfileDone: false,
  editProfileError: null,
  deleteProfileLoading: false, // 프로필 삭제 시도중
  deleteProfileDone: false,
  deleteProfileError: null,
  addImageLoading: false, // 이미지 추가 시도중
  addImageDone: false,
  addImageError: null,
  editImageLoading: false, // 이미지 수정 시도중
  editImageDone: false,
  editImageError: null,
};

export const RESET_IMAGE_REQUEST = 'RESET_IMAGE_REQUEST';
export const RESET_IMAGE_SUCCESS = 'RESET_IMAGE_SUCCESS';
export const RESET_IMAGE_FAILURE = 'RESET_IMAGE_FAILURE';

export const PROFILE_LIKE_REQUEST = 'PROFILE_LIKE_REQUEST';
export const PROFILE_LIKE_SUCCESS = 'PROFILE_LIKE_SUCCESS';
export const PROFILE_LIKE_FAILURE = 'PROFILE_LIKE_FAILURE';

export const PROFILE_UNLIKE_REQUEST = 'PROFILE_UNLIKE_REQUEST';
export const PROFILE_UNLIKE_SUCCESS = 'PROFILE_UNLIKE_SUCCESS';
export const PROFILE_UNLIKE_FAILURE = 'PROFILE_UNLIKE_FAILURE';

export const LOAD_SUGGESTION_REQUEST = 'LOAD_SUGGESTION_REQUEST';
export const LOAD_SUGGESTION_SUCCESS = 'LOAD_SUGGESTION_SUCCESS';
export const LOAD_SUGGESTION_FAILURE = 'LOAD_SUGGESTION_FAILURE';

export const LOAD_ALL_PROFILES_REQUEST = 'LOAD_ALL_PROFILES_REQUEST';
export const LOAD_ALL_PROFILES_SUCCESS = 'LOAD_ALL_PROFILES_SUCCESS';
export const LOAD_ALL_PROFILES_FAILURE = 'LOAD_ALL_PROFILES_FAILURE';

export const LOAD_OTHER_PROFILES_REQUEST = 'LOAD_OTHER_PROFILES_REQUEST';
export const LOAD_OTHER_PROFILES_SUCCESS = 'LOAD_OTHER_PROFILES_SUCCESS';
export const LOAD_OTHER_PROFILES_FAILURE = 'LOAD_OTHER_PROFILES_FAILURE';

export const LOAD_ALL_PROFILES_LEN_REQUEST = 'LOAD_ALL_PROFILES_LEN_REQUEST';
export const LOAD_ALL_PROFILES_LEN_SUCCESS = 'LOAD_ALL_PROFILES_LEN_SUCCESS';
export const LOAD_ALL_PROFILES_LEN_FAILURE = 'LOAD_ALL_PROFILES_LEN_FAILURE';

export const LOAD_HASHTAG_PROFILES_REQUEST = 'LOAD_HASHTAG_PROFILES_REQUEST';
export const LOAD_HASHTAG_PROFILES_SUCCESS = 'LOAD_HASHTAG_PROFILES_SUCCESS';
export const LOAD_HASHTAG_PROFILES_FAILURE = 'LOAD_HASHTAG_PROFILES_FAILURE';

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

export const ADD_PROFILE_REQUEST = 'ADD_PROFILE_REQUEST';
export const ADD_PROFILE_SUCCESS = 'ADD_PROFILE_SUCCESS';
export const ADD_PROFILE_FAILURE = 'ADD_PROFILE_FAILURE';

export const EDIT_PROFILE_REQUEST = 'EDIT_PROFILE_REQUEST';
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS';
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE';

export const DELETE_PROFILE_REQUEST = 'DELETE_PROFILE_REQUEST';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_FAILURE = 'DELETE_PROFILE_FAILURE';

export const ADD_IMAGE_REQUEST = 'ADD_IMAGE_REQUEST';
export const ADD_IMAGE_SUCCESS = 'ADD_IMAGE_SUCCESS';
export const ADD_IMAGE_FAILURE = 'ADD_IMAGE_FAILURE';

export const EDIT_IMAGE_REQUEST = 'EDIT_IMAGE_REQUEST';
export const EDIT_IMAGE_SUCCESS = 'EDIT_IMAGE_SUCCESS';
export const EDIT_IMAGE_FAILURE = 'EDIT_IMAGE_FAILURE';

export const ADD_TODAY_REQUEST = 'ADD_TODAY_REQUEST';
export const ADD_TODAY_SUCCESS = 'ADD_TODAY_SUCCESS';
export const ADD_TODAY_FAILURE = 'ADD_TODAY_FAILURE';

export const ADD_TOTAL_REQUEST = 'ADD_TOTAL_REQUEST';
export const ADD_TOTAL_SUCCESS = 'ADD_TOTAL_SUCCESS';
export const ADD_TOTAL_FAILURE = 'ADD_TOTAL_FAILURE';

export const DONE_RESET = 'DONE_RESET';

export const ADD_TODAY_TO_ME = 'ADD_TODAY_TO_ME';
export const ADD_TOTAL_TO_ME = 'ADD_TOTAL_TO_ME';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DONE_RESET:
        draft.addProfileDone = false;
        draft.editProfileDone = false;
        break;
      case LOAD_ALL_PROFILES_LEN_REQUEST:
        draft.loadAllProfilesLenLoading = true;
        draft.loadAllProfilesLenDone = false;
        draft.loadAllProfilesLenError = null;
        break;
      case LOAD_ALL_PROFILES_LEN_SUCCESS: {
        draft.loadAllProfilesLenLoading = false;
        draft.loadAllProfilesLenDone = true;
        draft.allProfilesLen = action.data;
        break;
      }
      case LOAD_ALL_PROFILES_LEN_FAILURE:
        draft.loadAllProfilesLenLoading = false;
        draft.loadAllProfilesLenError = action.error;
        break;
      case RESET_IMAGE_REQUEST:
        draft.resetImageLoading = true;
        draft.resetImageDone = false;
        draft.resetImageError = null;
        break;
      case RESET_IMAGE_SUCCESS: {
        draft.resetImageLoading = false;
        draft.resetImageDone = true;
        draft.imagePath = null;
        draft.addProfileDone = false;
        break;
      }
      case RESET_IMAGE_FAILURE:
        draft.resetImageLoading = false;
        draft.resetImageError = action.error;
        break;
      case ADD_CONTACT_REQUEST:
        draft.addContactLoading = true;
        draft.addContactDone = false;
        draft.addContactError = null;
        break;
      case ADD_CONTACT_SUCCESS:
        draft.addContactLoading = false;
        draft.addContactDone = true;
        draft.contacts.unshift(action.data);
        break;
      case ADD_CONTACT_FAILURE:
        draft.addContactLoading = false;
        draft.addContactError = action.error;
        break;
      case DELETE_CONTACT_REQUEST:
        draft.deleteContactLoading = true;
        draft.deleteContactDone = false;
        draft.deleteContactError = null;
        break;
      case DELETE_CONTACT_SUCCESS:
        draft.deleteContactLoading = false;
        draft.deleteContactDone = true;
        draft.contacts.unshift(action.data);
        break;
      case DELETE_CONTACT_FAILURE:
        draft.deleteContactLoading = false;
        draft.deleteContactError = action.error;
        break;
      case LOAD_ALL_PROFILES_REQUEST:
        draft.loadAllProfilesLoading = true;
        draft.loadAllProfilesDone = false;
        draft.loadAllProfilesError = null;
        break;
      case LOAD_ALL_PROFILES_SUCCESS: {
        draft.loadAllProfilesLoading = false;
        draft.loadAllProfilesDone = true;
        draft.allProfiles = draft.allProfiles.concat(action.data);
        draft.hasMoreProfiles = action.data.length === 10;
        break;
      }
      case LOAD_ALL_PROFILES_FAILURE:
        draft.loadAllProfilesLoading = false;
        draft.loadAllProfilesError = action.error;
        break;
      case LOAD_SUGGESTION_REQUEST:
        draft.loadSuggestionLoading = true;
        draft.loadSuggestionDone = false;
        draft.loadSuggestionError = null;
        break;
      case LOAD_SUGGESTION_SUCCESS: {
        draft.loadSuggestionLoading = false;
        draft.loadSuggestionDone = true;
        draft.suggestion = action.data;
        break;
      }
      case LOAD_SUGGESTION_FAILURE:
        draft.loadSuggestionLoading = false;
        draft.loadSuggestionError = action.error;
        break;
      case LOAD_HASHTAG_PROFILES_REQUEST:
        draft.loadHashtagProfilesLoading = true;
        draft.loadHashtagProfilesDone = false;
        draft.loadHashtagProfilesError = null;
        break;
      case LOAD_HASHTAG_PROFILES_SUCCESS: {
        draft.loadHashtagProfilesLoading = false;
        draft.loadHashtagProfilesDone = true;
        draft.hashtagProfiles = action.data;
        break;
      }
      case LOAD_HASHTAG_PROFILES_FAILURE:
        draft.loadHashtagProfilesLoading = false;
        draft.loadHashtagProfilesError = action.error;
        break;
      case LOAD_OTHER_PROFILES_REQUEST:
        draft.loadOtherProfilesLoading = true;
        draft.loadOtherProfilesDone = false;
        draft.loadOtherProfilesError = null;
        break;
      case LOAD_OTHER_PROFILES_SUCCESS: {
        draft.loadOtherProfilesLoading = false;
        draft.loadOtherProfilesDone = true;
        draft.profile = action.data;
        break;
      }
      case LOAD_OTHER_PROFILES_FAILURE:
        draft.loadOtherProfilesLoading = false;
        draft.loadOtherProfilesError = action.error;
        break;

      case ADD_PROFILE_REQUEST:
        draft.addProfileLoading = true;
        draft.addProfileDone = false;
        draft.addProfileError = null;
        break;
      case ADD_PROFILE_SUCCESS: {
        draft.addProfileLoading = false;
        draft.addProfileDone = true;
        draft.profile = action.data;
        break;
      }
      case ADD_PROFILE_FAILURE:
        draft.addProfileLoading = false;
        draft.addProfileError = action.error;
        break;
      case EDIT_PROFILE_REQUEST:
        draft.editProfileLoading = true;
        draft.editProfileDone = false;
        draft.editProfileError = null;
        break;
      case EDIT_PROFILE_SUCCESS: {
        draft.editProfileLoading = false;
        draft.editProfileDone = true;
        draft.profile = action.data;
        break;
      }
      case EDIT_PROFILE_FAILURE:
        draft.addImageLoading = false;
        draft.addImageError = action.error;
        break;
      case ADD_IMAGE_REQUEST:
        draft.addImageLoading = true;
        draft.addImageDone = false;
        draft.addImageError = null;
        break;
      case ADD_IMAGE_SUCCESS: {
        draft.addImageLoading = false;
        draft.addImageDone = true;
        draft.imagePath = action.data;
        break;
      }
      case ADD_IMAGE_FAILURE:
        draft.addImageLoading = false;
        draft.addImageError = action.error;
        break;
      case PROFILE_UNLIKE_REQUEST:
        draft.profileUnlikeLoading = true;
        draft.profileUnlikeDone = false;
        draft.profileUnlikeError = null;
        break;
      case PROFILE_UNLIKE_SUCCESS: {
        draft.profileUnlikeLoading = false;
        draft.profileUnlikeDone = true;
        draft.liking = action.data;
        break;
      }
      case PROFILE_UNLIKE_FAILURE:
        draft.profileUnlikeLoading = false;
        draft.profileUnlikeError = action.error;
        break;
      case EDIT_IMAGE_REQUEST:
        draft.editImageLoading = true;
        draft.editImageDone = false;
        draft.editImageError = null;
        break;
      case EDIT_IMAGE_SUCCESS: {
        draft.editImageLoading = false;
        draft.editImageDone = true;
        draft.imagePath = action.data;
        break;
      }
      case EDIT_IMAGE_FAILURE:
        draft.editImageLoading = false;
        draft.editImageError = action.error;
        break;
      case PROFILE_LIKE_REQUEST:
        draft.profileLikeLoading = true;
        draft.profileLikeDone = false;
        draft.profileLikeError = null;
        break;
      case PROFILE_LIKE_SUCCESS: {
        draft.profileLikeLoading = false;
        draft.profileLikeDone = true;
        draft.imagePath = action.data;
        break;
      }
      case PROFILE_LIKE_FAILURE:
        draft.profileLikeLoading = false;
        draft.profileLikeError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
