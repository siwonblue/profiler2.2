import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_HASHTAG_PROFILES_REQUEST, LOAD_OTHER_PROFILES_REQUEST } from '../../reducers/profile';
import { DivChildren, rowStyle } from '../../style/styled';
import TopBottomEdit from '../../components/Layout/TopBottomEdit';
import { useRouter } from 'next/router';
import TagSearchCard from '../../components/TagSearchCard';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { END } from 'redux-saga';

const Home = () => {
  const { hashtagProfiles } = useSelector((state) => state.profile);
  const len = hashtagProfiles?.length;
  const dispatch = useDispatch();
  const router = useRouter();
  //
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  //   dispatch({
  //     type: LOAD_HASHTAG_PROFILES_REQUEST,
  //     data: router.query.tag,
  //   });
  // }, []);

  return (
    <TopBottomEdit title="검색 결과" push="">
      <DivChildren style={{ height: '100%' }}>
        <Row style={{ margin: '2rem 0 3rem 0' }}>
          <Col
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            span={8}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex' }}>
                <h1>{len}</h1>
                <div
                  style={{
                    alignSelf: 'flex-end',
                    paddingBottom: '.5rem',
                    color: '#FFFFFF',
                    opacity: '30%',
                  }}
                >
                  개의
                </div>
              </div>
              <div style={{ color: '#FFFFFF', opacity: '30%' }}>프로필</div>
            </div>
          </Col>
          <Col
            style={{
              color: '#FFFFFF',
              opacity: '20%',
            }}
            span={16}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet autem beatae,
              consequatur deleniti et facere in ipsum nam, nisi non perferendis quae quas quia recusandae, sint soluta
              voluptas!
            </div>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col style={{ textAlign: 'center' }} span={24}>
            {hashtagProfiles?.map((profile) => (
              <TagSearchCard profile={profile} key={profile.id} />
            ))}
          </Col>
        </Row>
        <Row name="margin" style={{ marginBottom: '4rem' }}>
          {null}
        </Row>
      </DivChildren>
    </TopBottomEdit>
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
    type: LOAD_HASHTAG_PROFILES_REQUEST,
    data: params.tag,
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
//     type: LOAD_HASHTAG_PROFILES_REQUEST,
//     data: context.params.tag,
//   });
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default Home;
