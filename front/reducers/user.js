import produce from 'immer';

export const initialState = {
  loadMyInfoLoading: false, // 사용자 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  kakaoLoading: false, // 카카오 로그인 시도중
  kakaoDone: false,
  kakaoError: null,
  naverLoading: false, // 네이버 로그인 시도중
  naverDone: false,
  naverError: null,
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  withDrawalLoading: false, // 회원탈퇴 시도중
  withDrawalDone: false,
  withDrawalError: null,
  me: null,
  signUpData: {},
  loginData: {},
  loadSearch: false,
  loadProfile: false,
  loadMy: false,
};
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_SEARCH = 'LOAD_SEARCH';
export const LOAD_PROFILE = 'LOAD_PROFILE';
export const LOAD_MY = 'LOAD_MY';

export const KAKAO_REQUEST = 'KAKAO_REQUEST';
export const KAKAO_SUCCESS = 'KAKAO_SUCCESS';
export const KAKAO_FAILURE = 'KAKAO_FAILURE';

export const NAVER_REQUEST = 'NAVER_REQUEST';
export const NAVER_SUCCESS = 'NAVER_SUCCESS';
export const NAVER_FAILURE = 'NAVER_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const WITH_DRAWAL_REQUEST = 'WITH_DRAWAL_REQUEST';
export const WITH_DRAWAL_SUCCESS = 'WITH_DRAWAL_SUCCESS';
export const WITH_DRAWAL_FAILURE = 'WITH_DRAWAL_FAILURE';

export const ADD_CONTACT_TO_ME = 'ADD_CONTACT_TO_ME';
export const DELETE_CONTACT_TO_ME = 'DELETE_CONTACT_TO_ME';
export const ADD_LIKE_TO_ME = 'ADD_LIKE_TO_ME';
export const ADD_PATH_TO_ME = 'ADD_PATH_TO_ME';
export const DELETE_LIKING_TO_ME = 'DELETE_LIKING_TO_ME';
export const ADD_HASHTAG_TO_ME = 'ADD_HASHTAG_TO_ME';

export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
export const LOGIN_KEY = 'LOG_IN';
export const LOGOUT_KEY = 'LOG_OUT';
export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_SEARCH:
        draft.loadSearch = true;
        draft.loadProfile = false;
        draft.loadMy = false;
        break;
      case LOAD_PROFILE:
        draft.loadSearch = false;
        draft.loadProfile = true;
        draft.loadMy = false;
        break;
      case LOAD_MY:
        draft.loadSearch = false;
        draft.loadProfile = false;
        draft.loadMy = true;
        break;
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;
      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        draft.loadMyInfoDone = true;
        break;
      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;
      case NAVER_REQUEST:
        draft.naverLoading = true;
        draft.naverError = null;
        draft.naverDone = false;
        break;
      case NAVER_SUCCESS:
        draft.naverLoading = false;
        draft.me = action.data;
        draft.naverDone = true;
        break;
      case NAVER_FAILURE:
        draft.naverLoading = false;
        draft.naverError = action.error;
        break;
      case KAKAO_REQUEST:
        draft.kakaoLoading = true;
        draft.kakaoError = null;
        draft.kakaoDone = false;
        break;
      case KAKAO_SUCCESS:
        draft.kakaoLoading = false;
        draft.me = action.data;
        draft.kakaoDone = true;
        break;
      case KAKAO_FAILURE:
        draft.kakaoLoading = false;
        draft.kakaoError = action.error;
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = action.data;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.me = action.data;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case WITH_DRAWAL_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case WITH_DRAWAL_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        draft.me = null;
        break;
      case WITH_DRAWAL_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case ADD_CONTACT_TO_ME: {
        const profileIndex = draft.me.profiles.findIndex((p) => p.id === action.data.id);
        draft.me.profiles[profileIndex].Contacts = action.data.Contacts;
        break;
      }
      case DELETE_CONTACT_TO_ME: {
        const profileIndex = draft.me.profiles.findIndex((p) => p.id === action.data.id);
        draft.me.profiles[profileIndex].Contacts = action.data.Contacts;
        break;
      }
      case DELETE_LIKING_TO_ME: {
        const profileIndex = draft.me.profiles.findIndex((p) => p.id === action.data.id);
        draft.me.profiles[profileIndex].Liking = action.data.likingList;
        break;
      }
      // case ADD_PATH_TO_ME:{
      //   const profileIndex = draft.me.profiles.findIndex(p=> p.id === action.data.id )
      //   draft.me.profiles[profileIndex-1].Images[0].src = "안녕하세요!"
      //   break;
      // }

      default:
        break;
    }
  });

export default reducer;
