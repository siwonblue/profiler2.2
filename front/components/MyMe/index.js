import React, { useCallback, useState } from 'react';
import { Button, Col, Drawer, Row } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import ProfileMapping from '../ProfileMapping';
import { drawerStyle, ImageStyle, rowStyle, rowStyle1 } from '../../style/styled';
import { LOG_OUT_REQUEST, WITH_DRAWAL_REQUEST } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { a, a0, a1, a2, a3, a4, a5, b, btnStyle, c, d, e } from './styles';
import DeleteAlertDialogSlide from '../AlertDialogSlide/DeleteAlertDialogSlide';

const MyMe = () => {
  const { me, logOutLoading, withDrawalLoading } = useSelector((state) => state.user);
  const { imagePath } = useSelector((state) => state.profile);
  const [showSlideOut, setShowSlideOut] = useState(false);
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const profiles = me?.profiles;
  const dispatch = useDispatch();
  const action = '회원탈퇴';
  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);
  const test = () => {
    setShowSlideOut((prev) => !prev);
  };
  const onToggleLeftDrawer = useCallback(() => {
    setShowLeftDrawer((prev) => !prev);
  });

  const onWithDrawal = useCallback(() => {
    dispatch({
      type: WITH_DRAWAL_REQUEST,
    });
  }, []);

  return (
    <div>
      <Row style={a5}>
        <Col span={24}>
          <div style={a4}>
            <h3>Show your profiles</h3>
            <h3>Find other profiles</h3>
            <h2>PROFILER</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={a3} span={24}>
          {profiles?.length < 30 && (
            // <Col span={24} style={{ textAlign: 'center', marginBottom: '2rem', border:'1px solid red' }}>
            <Link href="/edit">
              <a>
                <img style={ImageStyle} src={`${imagePath || `defaultProfile.jpeg`}`} alt="profile_image" />
                <div style={a2}>
                  <PlusCircleTwoTone style={a1} />
                </div>
              </a>
            </Link>
            // </Col>
          )}
          {profiles?.length === 0 ? (
            <h3 style={a0}>첫 프로필을 만들어 주세요.</h3>
          ) : (
            <Row>
              <Col style={e} span={24}>
                {profiles?.map((profile) => (
                  <ProfileMapping
                    showLeftDrawer={showLeftDrawer}
                    onToggleLeftDrawer={onToggleLeftDrawer}
                    profile={profile}
                    key={profile.id}
                  />
                ))}
              </Col>
            </Row>
          )}
        </Col>
      </Row>
      <div style={d}>
        <Row name="all">
          <Col span={24} style={a}>
            <hr style={b} />
            <Link href="/about">
              <a>
                <h2>프로파일러 서비스 소개</h2>
              </a>
            </Link>
          </Col>
        </Row>
        <Row name="me">
          <Col span={8}>
            <Button style={btnStyle} onClick={onLogout} loading={logOutLoading}>
              로그아웃
            </Button>
          </Col>
          <Col span={8}>
            <Button style={btnStyle} onClick={test} loading={withDrawalLoading}>
              회원 탈퇴
            </Button>
          </Col>
        </Row>
      </div>
      <DeleteAlertDialogSlide onAction={onWithDrawal} showSlideOut={showSlideOut} action={action} test={test} />
    </div>
  );
};

export default MyMe;
