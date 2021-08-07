import React from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { a, a0, a1, c, d, e, e0, e1, f, kakaoStyle, naverStyle } from './styles';
import { backUrl } from '../../config/config';

const MyNotMe = () => {
  const kakao = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/kakao.png';
  const naver = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/naver.png';
  return (
    <>
      <Row style={a}>
        <Col span={24}>
          <div style={a0}>
            <h3>Show your profiles</h3>
            <h3>Find other profiles</h3>
            <h2>PROFILER</h2>
          </div>
        </Col>
      </Row>
      <div>
        <a href={`${backUrl}/user/naver`} rel="noopener noreferrer">
          <Row style={naverStyle}>
            <Col style={e0} span={8}>
              <img width="20" height="20" src={naver} alt="오류" />
            </Col>
            <Col style={e1} span={8}>
              <h4 style={e}>네이버 로그인</h4>
            </Col>
            <Col span={8}>{null}</Col>
          </Row>
        </a>

        <a href={`${backUrl}/user/kakao`} rel="noopener noreferrer">
          <Row style={kakaoStyle}>
            <Col style={e0} span={8}>
              <img width="20" height="20" src={kakao} alt="오류" />
            </Col>
            <Col style={e1} span={8}>
              <h4 style={d}>카카오 로그인</h4>
            </Col>
            <Col span={8}>{null}</Col>
          </Row>
        </a>
      </div>
      <Row name="all" style={a1}>
        <Col span={24}>
          <hr style={f} />
          <Link href="/about">
            <a>
              <h2>프로파일러 서비스 소개</h2>
            </a>
          </Link>
        </Col>
      </Row>
    </>
  );
};
export default MyNotMe;
