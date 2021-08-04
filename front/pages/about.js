import React, { useEffect } from 'react';
import Image from 'next/image';
import TopBottomEdit from '../components/Layout/TopBottomEdit';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DivChildren } from '../style/styled';
import { backUrl } from '../config/config';
import test from '../public/test.png';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const About = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  return (
    <TopBottomEdit title="서비스 소개" footer="" push="my">
      <DivChildren>
        <Row>
          <Col span={24}>
            <h1>아날로그 감성</h1>
          </Col>
        </Row>
        <Row style={{ border: '1px solid red', marginBottom: '3rem' }}>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={24}>
            <h4>전화번호만 존재하던 그 시절,</h4>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'flex-end' }} span={24}>
            <h1>디지털 시대</h1>
          </Col>
        </Row>
        <Row style={{ border: '1px solid red', marginBottom: '3rem' }}>
          <Col
            style={{ display: 'flex', justifyContent: 'flex-end', border: '1px solid aqua', marginBottom: '1rem' }}
            span={24}
          >
            <h3>나를 표현하는 수단이 많아졌다.</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={4}>
            <h4>인스타</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={4}>
            <h4>페이스북</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={4}>
            <h4>카카오톡</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={4}>
            <h4>블로그</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={4}>
            <h4>유튜브</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={2}>
            <h5>깃헙</h5>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={2}>
            <h5>트위터</h5>
          </Col>
        </Row>
        <Row style={{ border: '1px solid red', marginBottom: '3rem' }}>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={24}>
            <h3>Problem1)그래서 머리가 아파졌다.</h3>
          </Col>
        </Row>
        <Row style={{ border: '1px solid red', marginBottom: '3rem' }}>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={24}>
            <h3>Problem2)제대로된 네트워킹은 되지 않는다.</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h3>같은 단톡방에 있는 저 친구 궁금하다</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h3>학교 동기들이 궁금하다</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h3>같이 수업듣는 그 친구 궁금하다</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h3>~사람 찾는데 내 주변 커뮤니티에서 못 구할까?</h3>
          </Col>
        </Row>
        <Row style={{ border: '1px solid red', marginBottom: '3rem' }}>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={24}>
            <h3>Problem3)수수료까지 먹는다.</h3>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h4>수 많은 데이팅앱</h4>
          </Col>
          <Col style={{ border: '1px solid aqua', marginBottom: '1rem' }} span={12}>
            <h4>재능 판매</h4>
          </Col>
        </Row>
      </DivChildren>
    </TopBottomEdit>
  );
};

export default About;
