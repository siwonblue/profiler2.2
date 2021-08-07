import React, { useEffect } from 'react';
import Image from 'next/image';
import TopBottomEdit from '../components/Layout/TopBottomEdit';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DivChildren, ImageStyle, ImageStyle0, ImageStyle00 } from '../style/styled';
import Link from 'next/link';

const About = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const laser = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/laser.png';
  const garo = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/garo.png';
  const slide = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/slide.png';
  const moon = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/1004.png';
  const firstProfile = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/firstprofile.png';
  const addProfile = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/addprofile.png';
  const addContact = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/addcontact.png';
  const search = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/search.png';
  const a = { border: '2px dotted black', marginBottom: '1rem', textAlign: 'center', marginRight: '.5rem' };
  return (
    <TopBottomEdit title="서비스 소개" footer="" push="my">
      <DivChildren style={{ height: '850vh' }}>
        <Row>
          <Col span={24}>
            <h1 style={{ fontSize: '3em' }}>아날로그 감성</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '3rem' }}>
          <Col span={24}>
            <h4>전화번호만 존재하던 그 시절</h4>
          </Col>
          <Col style={{ marginBottom: '1rem' }} span={24}>
            <h4>내 동년배들은 이걸로만 소통했다.</h4>
          </Col>
        </Row>
        <Row style={{ marginBottom: '15rem' }}>
          <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>
            <img style={{ width: '10rem', height: '10rem' }} src={laser} alt="profile_image" />
          </Col>
          <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>
            <img style={{ width: '10rem', height: '10rem' }} src={garo} alt="profile_image" />
          </Col>
          <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>
            <img style={{ width: '10rem', height: '10rem' }} src={slide} alt="profile_image" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '15rem' }}>
          <Col style={{ textAlign: 'center' }} span={24}>
            <h2> 통화 문자 무제한이던 친구가 부러웠고</h2>
          </Col>
        </Row>
        <Row style={{ marginBottom: '20rem' }}>
          <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={16}>
            <img style={ImageStyle0} src={moon} alt="profile_image" />
          </Col>
          <Col style={{ marginTop: '7rem', marginBottom: '5rem', textAlign: 'center' }} span={8}>
            <h4>가끔 이런 문자 오면</h4>
            <h5> 하루종일 설렜던 latte</h5>
          </Col>
        </Row>

        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>시간이 흘러</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>IT 공룡 등장</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>MZ 세대가 온다</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>Digital Transformation</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }} span={24}>
            <h1>.</h1>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '110vh' }} span={24}>
            <h3>!!!!</h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '4rem', color: 'white' }} span={24}>
            <div>디지털 시대</div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '3rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '6rem' }} span={24}>
            <h4>개인에 연결된 채널이 많아졌다.</h4>
          </Col>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Col style={a} span={5}>
              <h4>인스타</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>페이스북</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>카카오톡</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>블로그</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>유튜브</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>깃헙</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>트위터</h4>
            </Col>
            <Col style={a} span={5}>
              <h4>당근마켓</h4>
            </Col>
            <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
              <h2 style={{ color: 'black' }}>...</h2>
            </Col>
          </div>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col
            style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem', flexDirection: 'column' }}
            span={24}
          >
            <h4>문찐 아싸인줄 알았던 나</h4>
            <h4>사실 여기서 네 개나 쓰는 아싸였던 것</h4>
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>프로필 하나 만들고</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={firstProfile} style={{ width: '30rem', height: '65rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>내용 넣고</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={addProfile} style={{ width: '30rem', height: '50rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>링크 걸고</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={addContact} style={{ width: '30rem', height: '65rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>검색</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={search} style={{ width: '30rem', height: '65rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>존재는 알지만 대화해 본 적 없는 우리,</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>SNS 친구부터 되어 볼까요?</h3>
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <h1>주변사람 SNS 찾기</h1>
            <h1>로고</h1>
          </Col>
          <Col span={8}>
            <Link href="/my">
              <a>바로가기</a>
            </Link>
          </Col>
        </Row>
      </DivChildren>
    </TopBottomEdit>
  );
};

export default About;
