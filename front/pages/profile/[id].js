import React, { useEffect } from 'react';
import TopBottomEdit from '../../components/Layout/TopBottomEdit';
import { LOAD_ALL_PROFILES_REQUEST, LOAD_OTHER_PROFILES_REQUEST, PROFILE_LIKE_REQUEST } from '../../reducers/profile';
import RenderOther2 from '../../components/RenderOther';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { END } from 'redux-saga';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialogSlide from '../../components/AlertDialogSlide/AlertDialogSlide';
import { useRouter } from 'next/router';
import Head from 'next/head';

const style = {
  background: 'black',
  border: '1px solid red',
};

const OtherProfile = () => {
  const { profile } = useSelector((state) => state.profile);
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_OTHER_PROFILES_REQUEST,
  //     data: router.query.id,
  //   });
  // }, []);

  return (
    <>
      <Head>
        <meta property="og:title" content="프로파일러" />
        <meta property="og:description" content="주변사람 SNS 찾기" />
      </Head>
      {me ? (
        <TopBottomEdit title="프로필" push="">
          <RenderOther2 profile={profile} />
        </TopBottomEdit>
      ) : (
        <TopBottomEdit title="프로필" push="">
          <AlertDialogSlide />
          <RenderOther2 profile={profile} />
        </TopBottomEdit>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_OTHER_PROFILES_REQUEST,
    data: params.id,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});
//
// export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//   console.log('getServerSideProps start');
//   const cookie = context.req ? context.req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (context.req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   context.store.dispatch({
//     type: LOAD_MY_INFO_REQUEST,
//   });
//   context.store.dispatch({
//     type: LOAD_OTHER_PROFILES_REQUEST,
//     data: context.query.id,
//   });
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default OtherProfile;
