import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row, Col } from 'antd';
import { topRow, bottomRow } from '../../style/styled';
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const a = {
  textAlign: 'center',
  borderRadius: '.5rem',
  paddingTop: '1rem',
};
const m = {
  textAlign: 'center',
  borderTop: '3px solid #FB6580',
  paddingTop: '1rem',
  borderTopRightRadius: '.2rem',
  borderTopLeftRadius: '.2rem',
};
const b = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};
const c = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};
const d = {
  color: '#FB6580',
  fontSize: '2.5rem',
};
const e = {
  color: '#5C5E6F',
  fontSize: '2.5rem',
};
const f = {
  color: '#FB6580',
};
const g = {
  color: '#5C5E6F',
};
const h = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
};

const TopBottomLO = ({ children, loadSearch, loadProfile, loadMy }) => (
  <>
    <Row style={topRow}>
      <Col style={b} span={12}>
        <span>프로파일러 Beta : 주변사람 SNS 찾기</span>
      </Col>
      <Col style={h} span={12}>
        <span>문의 mvpservicefor@gmail.com</span>
      </Col>
    </Row>
    <div>{children}</div>
    <Row style={bottomRow}>
      {loadSearch ? (
        <Col style={m} span={3}>
          <Link href="/">
            <a>
              <SearchOutlined style={d} />
              <h3 style={f}>검색</h3>
            </a>
          </Link>
        </Col>
      ) : (
        <Col style={a} span={3}>
          <Link href="/">
            <a>
              <SearchOutlined style={e} />
              <h3 style={g}>검색</h3>
            </a>
          </Link>
        </Col>
      )}
      {loadProfile ? (
        <Col style={m} span={3}>
          <Link href="/profile">
            <a>
              <UserOutlined style={d} />
              <h3 style={f}>프로필</h3>
            </a>
          </Link>
        </Col>
      ) : (
        <Col style={a} span={3}>
          <Link href="/profile">
            <a>
              <UserOutlined style={e} />
              <h3 style={g}>프로필</h3>
            </a>
          </Link>
        </Col>
      )}
      {loadMy ? (
        <Col style={m} span={3}>
          <Link href="/my">
            <a>
              <HomeOutlined style={d} />
              <h3 style={f}>MY</h3>
            </a>
          </Link>
        </Col>
      ) : (
        <Col style={a} span={3}>
          <Link href="/my">
            <a>
              <HomeOutlined style={e} />
              <h3 style={g}>MY</h3>
            </a>
          </Link>
        </Col>
      )}
    </Row>
  </>
);

TopBottomLO.propTypes = {
  children: PropTypes.node.isRequired,
  loadSearch: PropTypes.bool.isRequired,
  loadProfile: PropTypes.bool.isRequired,
  loadMy: PropTypes.bool.isRequired,
};

export default TopBottomLO;
