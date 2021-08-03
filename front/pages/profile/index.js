import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import TopBottomLO from '../../components/Layout/TopBottomLO';
import RenderMy from '../../components/RenderMy';
import { LOAD_MY, LOAD_MY_INFO_REQUEST, LOAD_PROFILE } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import { LOAD_ALL_PROFILES_REQUEST } from '../../reducers/profile';

const MyProfile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  const loadSearch = false;
  const loadMy = false;
  const loadProfile = true;

  return (
    <TopBottomLO loadSearch={loadSearch} loadProfile={loadProfile} loadMy={loadMy} name="my profile">
      {me ? (
        <RenderMy />
      ) : (
        <>
          <Row style={{ marginTop: '5rem' }}>
            <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
              <div>
                <h1>마이페이지에서</h1>
                <h1>로그인 해주세요🥲</h1>
              </div>
            </Col>
          </Row>
        </>
      )}
    </TopBottomLO>
  );
};
//
// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
//   const cookie = req ? req.headers.cookie : '';
//   axios.defaults.headers.Cookie = '';
//   if (req && cookie) {
//     axios.defaults.headers.Cookie = cookie;
//   }
//   store.dispatch({
//     type: LOAD_MY_INFO_REQUEST,
//   });
//   store.dispatch(END);
//   await store.sagaTask.toPromise();
// });

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
//
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default MyProfile;
