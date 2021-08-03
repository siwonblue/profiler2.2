import React, { useCallback, useState } from 'react';
import { Col, Row, Drawer, Modal } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { HeartFilled, MoreOutlined } from '@ant-design/icons';
import { ImageStyle2, ImageStyle3 } from '../../style/styled';
import {
  a,
  b,
  b0,
  b1,
  b10,
  b11,
  b12,
  b13,
  b14,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  drawerStyle,
  DrawWrapper,
} from './styles';

const ProfileMapping = ({ profile, showLeftDrawer, onToggleLeftDrawer }) => {
  const [draw1, setDraw1] = useState(false);
  const onDraw1 = useCallback((e) => {
    setDraw1((prev) => !prev);
  });

  return (
    <>
      <div>
        <Row name="profile-card" style={a}>
          <Col name="profile-image" span={7} style={b}>
            <img
              style={ImageStyle2}
              src={`${profile?.Images?.[0]?.src || `defaultProfile.jpeg`}`}
              alt="profile_image"
            />
          </Col>
          <Col span={17} style={b0}>
            <Row name="profile-name-edit">
              <Col span={16} style={b1}>
                <h3>{profile.name}</h3>
              </Col>
              <Col span={8} style={b2}>
                <Link href="/edit/[id]" as={`/edit/${profile.id}`}>
                  <a>편집</a>
                </Link>
              </Col>
            </Row>
            <Row name="meta-data" style={b3}>
              <Col span={7} style={b4}>
                <Row>
                  <Col span={8}>{null}</Col>
                  <Col span={8}>
                    <HeartFilled style={b5} />
                  </Col>
                  <Col span={8}>
                    <div>
                      <MoreOutlined onClick={onDraw1} style={b6} />
                    </div>
                  </Col>
                </Row>
                <div style={b7}>{profile?.Liker?.length}</div>
              </Col>
              <Col span={7} style={b8}>
                <div>Today</div>
                <div>???</div>
              </Col>
              <Col span={7} style={b9}>
                <div>Total</div>
                <div>???</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Drawer
          drawerStyle={drawerStyle}
          placement="left"
          closable={false}
          onClose={onDraw1}
          visible={draw1}
          getContainer={false}
          style={b10}
        >
          <div style={b11}>
            <h4>내 프로필을 관심등록한 프로필</h4>
            <button style={b12} onClick={onDraw1}>
              ❌
            </button>
          </div>
          {profile?.Liker?.map((l) => (
            <div style={b13} key={l.id}>
              <Link href="/profile/[id]" as={`/profile/${l.id}`}>
                <a>
                  <img
                    style={ImageStyle3}
                    src={`${l?.Images?.[0]?.src || `defaultProfile.jpeg`}`}
                    alt="profile_image"
                  />{' '}
                </a>
              </Link>
              <Link href="/profile/[id]" as={`/profile/${l.id}`}>
                <a style={b14}>{l.name}</a>
              </Link>
            </div>
          ))}
        </Drawer>
      </div>
    </>
  );
};

ProfileMapping.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    intro: PropTypes.string,
    id: PropTypes.number,
    UserId: PropTypes.number,
    Images: PropTypes.arrayOf({
      id: PropTypes.number,
      src: PropTypes.string,
      profileId: PropTypes.number,
    }),
    Hashtags: PropTypes.arrayOf({
      id: PropTypes.number,
      name: PropTypes.string,
      ProfileTag: PropTypes.shape({
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
      }),
    }),
    Contacts: PropTypes.arrayOf(PropTypes.object),
    Liker: PropTypes.arrayOf(PropTypes.object),
  }),
  showLeftDrawer: PropTypes.bool.isRequired,
  onToggleLeftDrawer: PropTypes.func.isRequired,
};

export default ProfileMapping;
