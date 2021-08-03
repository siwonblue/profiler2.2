import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import {
  ADD_IMAGE_REQUEST,
  DELETE_PROFILE_REQUEST,
  EDIT_PROFILE_REQUEST,
  LOAD_HASHTAG_PROFILES_REQUEST,
  RESET_IMAGE_SUCCESS,
} from '../../reducers/profile';
import TopBottomEdit from '../../components/Layout/TopBottomEdit';
import { Button, Col, Drawer, Form, Row, message } from 'antd';
import { drawerStyle, ImageStyle, IntroText, LocalInput, rowStyle, TagText } from '../../style/styled';
import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import LikingProfileCard from '../../components/LikingProfileCard';
import WithDrawalDrawerContent from '../../components/WithDrawalDrawerContent';
import wrapper from '../../store/configureStore';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { END } from 'redux-saga';

const My = () => {
  const { me } = useSelector((state) => state.user);
  const { imagePath, editProfileDone } = useSelector((state) => state.profile);
  const router = useRouter();
  const profile = me?.profiles;
  const dispatch = useDispatch();
  const [showLikedProfile, setShowLikedProfile] = useState(false);
  const [showSlideOut, setShowSlideOut] = useState(false);
  useEffect(() => {
    dispatch({
      type: RESET_IMAGE_SUCCESS,
    });
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);
  const action = '프로필 삭제';
  // const url = new URL(window.location.href);
  // const path = `${url.pathname}?${url.searchParams.toString()}`;
  // const profileIdWith = path.substr(6);
  // const profileId = parseInt(profileIdWith.slice(0, -1), 10);
  const profileId = parseInt(router.query.id, 10);
  const a = profile?.map((profileInfo, index) => {
    if (profileInfo.id === profileId) return index;
    return null;
  });
  let profileIndex;
  if (a?.length === 1) {
    profileIndex = parseInt(a[0], 10);
  } else if (a?.length > 1) {
    if (a?.indexOf(0) !== -1) {
      profileIndex = 0;
    } else {
      profileIndex = parseInt(a?.filter(Boolean)[0], 10);
    }
  }

  const likerId = profile?.[profileIndex]?.id;
  const liking = profile?.[profileIndex]?.Liking;
  const exName = profile?.[profileIndex]?.name;
  const exIntro = profile?.[profileIndex]?.intro;
  const exImage = profile?.[profileIndex]?.Images[0]?.src;
  const exTag = profile?.[profileIndex]?.Hashtags;
  const exTags = exTag?.map((t) => t.name);
  const finalExTags = exTags?.map((t) => `#${t}`);
  let bin = '';
  const finedTag0 = finalExTags?.map((t) => (bin += t));
  const finedTag = finedTag0?.[finedTag0?.length - 1];
  const [name, setName] = useState(exName);
  const [intro, setIntro] = useState(exIntro);
  const [tag, setTag] = useState(finedTag);
  const [detect, setDetect] = useState(false);

  const changeName = (e) => {
    setName(e.target.value);
    setDetect(true);
  };
  const changeIntro = (e) => {
    setIntro(e.target.value);
    setDetect(true);
  };
  const changeTag = (e) => {
    setTag(e.target.value);
    setDetect(true);
  };

  useEffect(() => {
    if (editProfileDone) {
      router.push('/my');
    }
  }, [editProfileDone]);
  useEffect(() => {
    if (editProfileDone) {
      router.push('/my');
    }
  }, [editProfileDone]);

  const onSubmit = useCallback(() => {
    console.log(name, intro, tag, imagePath);
    if (!name || !name.trim()) {
      return message.error('프로필 이름을 입력해주세요.', 1);
    }
    if (!intro || !intro.trim()) {
      return message.error('프로필 소개글을 입력해주세요.', 1);
    }
    if (tag && tag[0] !== '#') {
      return message.error('태그에 #을 붙여 주세요.', 1);
    }
    const formData = new FormData();
    formData.append('image', imagePath);
    formData.append('name', name);
    formData.append('intro', intro);
    formData.append('tag', tag);
    formData.append('profileId', profileId);
    dispatch({
      type: EDIT_PROFILE_REQUEST,
      data: formData,
    });
  }, [name, intro, tag, imagePath, profileId]);

  const onChangeImages = useCallback((e) => {
    setDetect(true);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: ADD_IMAGE_REQUEST,
      data: imageFormData,
    });
  }, []);
  const onDelete = useCallback(() => {
    dispatch({
      type: DELETE_PROFILE_REQUEST,
      data: { id: profileId },
    });
    router.push('/my');
  }, []);

  const onShowLikedProfile = useCallback(() => {
    setShowLikedProfile((prev) => !prev);
  });
  const test = () => {
    setShowSlideOut((prev) => !prev);
  };

  const DrawWrapper2 = {
    position: 'relative',
    overflow: 'hidden',
    padding: '0 2rem 0 2rem',
    height: '100vh',
  };

  return (
    <>
      <>
        {me ? (
          <TopBottomEdit title="프로필 수정" footer="" push="my">
            <div name="child" style={DrawWrapper2}>
              <Form onFinish={onSubmit} encType="multipart/form-data" autoComplete="off">
                <Row
                  style={{
                    paddingTop: '2rem',
                  }}
                >
                  <Col style={{ textAlign: 'center' }} span={24}>
                    <img
                      style={ImageStyle}
                      src={`${imagePath || exImage || `defaultProfile.jpeg`}`}
                      alt="profile_image"
                    />
                  </Col>
                </Row>
                <Row
                  style={{
                    margin: '.5rem 0 4rem 0 ',
                  }}
                >
                  <Col span={24} style={{ textAlign: 'center' }}>
                    <input type="file" id="image-upload" hidden onChange={onChangeImages} />
                    <label
                      htmlFor="image-upload"
                      style={{
                        fontSize: '1.5rem',
                        color: '#716F88',
                        cursor: 'pointer',
                      }}
                    >
                      프로필 사진 변경
                    </label>
                  </Col>
                </Row>
                <Row name="button">
                  <Col span={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button
                      style={{
                        border: 'none',
                        background: 'none',
                        padding: '0',
                        color: '#585858',
                      }}
                      onClick={test}
                    >
                      프로필 삭제
                    </Button>
                  </Col>
                  <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    {detect ? (
                      <Button
                        style={{
                          border: 'none',
                          background: 'none',
                          padding: '0',
                          color: '#FFFFFF',
                        }}
                        htmlType="submit"
                      >
                        적용하기
                      </Button>
                    ) : (
                      <Button
                        style={{
                          border: 'none',
                          background: 'none',
                          padding: '0',
                          color: '#585858',
                        }}
                        htmlType="submit"
                        disabled
                      >
                        적용하기
                      </Button>
                    )}
                  </Col>
                </Row>
                <hr style={{ opacity: '10%', marginBottom: '1rem' }} />
                <Row name="name" style={rowStyle}>
                  <Col style={{ display: 'flex', alignItems: 'center' }} span={8}>
                    <h3>프로필 이름</h3>
                  </Col>
                  <Col span={16}>
                    <LocalInput value={name} onChange={changeName} maxLength="20" />
                  </Col>
                </Row>
                <Row name="intro" style={rowStyle}>
                  <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <h3>프로필 소개</h3>
                  </Col>
                  <Col span={16}>
                    <IntroText value={intro} onChange={changeIntro} maxLength="40" />
                  </Col>
                </Row>
                <Row name="tag" style={rowStyle}>
                  <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <h3>태그</h3>
                  </Col>
                  <Col span={16}>
                    <TagText value={tag} onChange={changeTag} maxLength="40" placeholder="#대학생 #친목" />
                  </Col>
                </Row>
              </Form>
              <Row>
                <Col style={{ height: '2rem' }} span={24}>
                  {null}
                </Col>
              </Row>
              <Row>
                <Col style={{ height: '4rem' }} span={9}>
                  <h3>관심 등록한 프로필</h3>
                </Col>
                <Col style={{ height: '4rem' }} span={15}>
                  {showLikedProfile ? (
                    <UpCircleOutlined
                      onClick={onShowLikedProfile}
                      style={{ fontSize: '2rem', color: '#FFFFFF', opacity: '50%' }}
                    />
                  ) : (
                    <DownCircleOutlined
                      onClick={onShowLikedProfile}
                      style={{
                        fontSize: '2rem',
                        color: '#FFFFFF',
                        opacity: '50%',
                      }}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                {showLikedProfile &&
                  liking.length !== 0 &&
                  liking?.map((liking) => <LikingProfileCard likerId={likerId} liking={liking} key={liking.id} />)}
              </Row>
              {showLikedProfile && liking.length === 0 && <h3>프로필을 둘러보고 관심등록을 해보세요!</h3>}

              <Drawer
                placement="bottom"
                getContainer={false}
                closable
                onClose={test}
                visible={showSlideOut}
                style={{ position: 'absolute' }}
                drawerStyle={drawerStyle}
              >
                <WithDrawalDrawerContent action={action} onAction={onDelete} test={test} />
              </Drawer>
            </div>
          </TopBottomEdit>
        ) : (
          <TopBottomEdit title="잘못된 접근" push="my">
            {null}
          </TopBottomEdit>
        )}
      </>
    </>
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
//   store.dispatch({
//     type: RESET_IMAGE_SUCCESS,
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
//   context.store.dispatch({
//     type: RESET_IMAGE_SUCCESS,
//   });
//   context.store.dispatch(END);
//   console.log('getServerSideProps end');
//   await context.store.sagaTask.toPromise();
// });

export default My;
