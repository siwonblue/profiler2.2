import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Row, Col, Form, Button, message } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { IntroText, LocalInput, rowStyle, ImageStyle } from '../../style/styled';
import TopBottomEdit from '../../components/Layout/TopBottomEdit';
import useInput from '../../hooks/useInput';
import {
  EDIT_PROFILE_REQUEST,
  ADD_IMAGE_REQUEST,
  ADD_PROFILE_REQUEST,
  ADD_PROFILE_SUCCESS,
  RESET_IMAGE_REQUEST,
  RESET_IMAGE_SUCCESS,
} from '../../reducers/profile';

const My = () => {
  const router = useRouter();
  const { me, isSigningUp } = useSelector((state) => state.user);
  const { imagePath, addProfileDone } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [name, onChangeName] = useInput('');
  const [selfIntro, onChangeSelfIntro] = useInput('');
  const [tag, onChangeTag] = useInput('');

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: RESET_IMAGE_SUCCESS,
    });
  }, []);

  useEffect(() => {
    if (addProfileDone) {
      router.push('/my');
    }
  }, [addProfileDone]);

  const onSubmit = useCallback(() => {
    console.log(name, selfIntro, tag, imagePath);
    if (!name || !name.trim()) {
      return message.error('프로필 이름을 입력해주세요.', 1);
    }
    if (!selfIntro || !selfIntro.trim()) {
      return message.error('프로필 소개글을 입력해주세요.', 1);
    }
    if (tag && tag[0] !== '#') {
      return message.error('태그에 #을 붙여 주세요.', 1);
    }
    const formData = new FormData();
    formData.append('image', imagePath);
    formData.append('name', name);
    formData.append('selfIntro', selfIntro);
    formData.append('tag', tag);
    dispatch({
      type: ADD_PROFILE_REQUEST,
      data: formData,
    });
  }, [name, selfIntro, tag, imagePath]);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: ADD_IMAGE_REQUEST,
      data: imageFormData,
    });
  }, []);

  return (
    <>
      <TopBottomEdit title="프로필 생성" footer="" push="my">
        {me && (
          <>
            <div style={{ padding: '0 2rem 0 2rem' }}>
              <Form onFinish={onSubmit} encType="multipart/form-data" autoComplete="off">
                <Row
                  name="profile-image"
                  style={{
                    paddingTop: '2rem',
                  }}
                >
                  <Col style={{ textAlign: 'center' }} span={24}>
                    <img style={ImageStyle} src={`${imagePath || `defaultProfile.jpeg`}`} alt="profile_image" />
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
                  <Col span={24} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                      style={{
                        border: 'none',
                        background: 'none',
                        padding: '0',
                        color: '#FFFFFF',
                      }}
                      htmlType="submit"
                      loading={isSigningUp}
                    >
                      적용하기
                    </Button>
                  </Col>
                </Row>
                <hr style={{ opacity: '10%', marginBottom: '1rem' }} />
                <Row name="name" style={rowStyle}>
                  <Col style={{ display: 'flex', alignItems: 'center' }} span={8}>
                    <h3>
                      프로필 이름 <span style={{ color: 'red' }}>*</span>
                    </h3>
                  </Col>
                  <Col span={16}>
                    <LocalInput onChange={onChangeName} maxLength="20" />
                  </Col>
                </Row>
                <Row name="intro" style={rowStyle}>
                  <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <h3>
                      프로필 소개 <span style={{ color: 'red' }}>*</span>
                    </h3>
                  </Col>
                  <Col span={16}>
                    <IntroText onChange={onChangeSelfIntro} maxLength="40" />
                  </Col>
                </Row>
                <Row name="tag" style={rowStyle}>
                  <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <h3>태그</h3>
                  </Col>
                  <Col span={16}>
                    <LocalInput onChange={onChangeTag} maxLength="40" placeholder="#대학생 #친목" />
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </TopBottomEdit>
    </>
  );
};

export default My;
