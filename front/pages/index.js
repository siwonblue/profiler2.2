import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Form, Row, message, Button } from 'antd';

import SearchProfileCard from '../components/SearchProfileCard';
import TopBottomLO from '../components/Layout/TopBottomLO';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_ALL_PROFILES_REQUEST, LOAD_HASHTAG_PROFILES_REQUEST } from '../reducers/profile';
import { DivChildren, LocalInput, rowStyle } from '../style/styled';
import wrapper from '../store/configureStore';
import { END } from 'redux-saga';
import axios from 'axios';
import { useRouter } from 'next/router';
import SuggestionList from '../components/SuggestionList';
import LandingAlertDialogSlide from '../components/AlertDialogSlide/LandingAlertDialogSlide';

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { allProfiles, hasMoreProfiles } = useSelector((state) => state.profile);
  const { me } = useSelector((state) => state.user);
  const [showDiv, setShowDiv] = useState(false);

  const len = allProfiles?.length;
  const loadSearch = true;
  const loadMy = false;
  const loadProfile = false;

  const onTrue = useCallback(() => {
    setShowDiv(true);
  });
  const onFalse = useCallback(() => {
    setShowDiv(false);
  });

  const a = {
    margin: '6rem 0 3rem 0',
  };
  const b = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const c = { display: 'flex', flexDirection: 'column' };
  const d = { display: 'flex' };
  const e = {
    alignSelf: 'flex-end',
    paddingBottom: '.5rem',
    color: '#FFFFFF',
    opacity: '30%',
  };
  const g = {
    color: '#FFFFFF',
    opacity: '20%',
  };
  const f = { color: '#FFFFFF', opacity: '30%' };
  const h = { textAlign: 'center' };
  const i = { marginBottom: '4rem' };
  return (
    <TopBottomLO loadSearch={loadSearch} loadProfile={loadProfile} loadMy={loadMy}>
      {!me && <LandingAlertDialogSlide />}
      <DivChildren onClick={onFalse} style={{ height: '100%' }}>
        <SuggestionList showDiv={showDiv} onTrue={onTrue} onFalse={onFalse} />
        <Row style={a}>
          <Col style={b} span={8}>
            <div style={c}>
              <div style={d}>
                <h1>{len}</h1>
                <div style={e}>개의</div>
              </div>
              <div style={f}>프로필</div>
            </div>
          </Col>
          <Col style={g} span={16}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet autem beatae,
              consequatur deleniti et facere in ipsum nam, nisi non perferendis quae quas quia recusandae, sint soluta
              voluptas
            </div>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col style={h} span={24}>
            {allProfiles && allProfiles.map((profile) => <SearchProfileCard profile={profile} key={profile.id} />)}
          </Col>
        </Row>
        <Row name="margin" style={i}>
          {null}
        </Row>
      </DivChildren>
    </TopBottomLO>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_ALL_PROFILES_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

// 아래 코드는 브라우저에서 실행되지 않고 프론트 서버에서만 실행
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
//     type: LOAD_ALL_PROFILES_REQUEST,
//   });
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default Home;
