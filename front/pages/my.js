import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import TopBottomLO from '../components/Layout/TopBottomLO';
import { DONE_RESET } from '../reducers/profile';
import MyNotMe from '../components/MyNotMe';
import MyMe from '../components/MyMe';
import { DrawWrapper } from '../style/styled';
import wrapper from '../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';
import styled from 'styled-components';

const DivChildren = styled.div`
  background: #2d2c3c;
  background: -moz-radial-gradient(center, #2d2c3c 0%, #232330 35%, #191925 100%);
  background: -webkit-radial-gradient(center, #2d2c3c 0%, #232330 35%, #191925 100%);
  background: radial-gradient(ellipse at center, #2d2c3c 0%, #232330 35%, #191925 100%);
  -webkit-box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
  box-shadow: -10px 0 13px -7px #000000, 10px 0px 13px -7px #000000, 0px 0px 9px 0px rgba(255, 255, 255, 0.13);
  padding: 2rem;
  height: 120vh;
`;
const My = () => {
  const { me, logOutLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log('me🔥🔥🔥🔥🔥🔥🔥', me);

  const loadSearch = false;
  const loadProfile = false;
  const loadMy = true;

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: DONE_RESET,
    });
  }, []);
  console.log(`👏👏👏👏👏👏👏about/ me ${me}`);

  return (
    <>
      <TopBottomLO loadSearch={loadSearch} loadProfile={loadProfile} loadMy={loadMy}>
        {me ? (
          <DivChildren style={DrawWrapper}>
            <MyMe />
          </DivChildren>
        ) : (
          <DivChildren style={{ height: '100vh' }}>
            <MyNotMe />
          </DivChildren>
        )}
      </TopBottomLO>
    </>
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
    type: DONE_RESET,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

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
//     type: DONE_RESET,
//   });
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default My;
