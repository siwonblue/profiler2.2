import React, { useEffect } from 'react';
import Image from 'next/image';
import TopBottomEdit from '../components/Layout/TopBottomEdit';
import { Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DivChildren, ImageStyle, ImageStyle0, ImageStyle00 } from '../style/styled';
import Link from 'next/link';
import { DownCircleOutlined } from '@ant-design/icons';

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
  const dang = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/dang.png';
  const brunch = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/brunch.png';
  const github = ' https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/github.png';
  const a = {
    border: '2px solid white',
    opacity: '50%',
    marginBottom: '1rem',
    textAlign: 'center',
    marginRight: '.5rem',
  };
  return (
    <TopBottomEdit title="서비스 소개" footer="" push="my">
      <div style={{ border: '1px solid black', background: 'black' }}>
        {/*<Row>*/}
        {/*  <Col span={24}>*/}
        {/*    <h1 style={{ fontSize: '3em' }}>아날로그 감성</h1>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<Row style={{ marginBottom: '3rem' }}>*/}
        {/*  <Col style={{ marginBottom: '3rem' }} span={24}>*/}
        {/*    <h4>전화번호만 존재하던 그 시절</h4>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<div style={{ border: '1px solid black', background: 'black', marginBottom: '6rem' }}>*/}
        {/*<Row*/}
        {/*  style={{*/}
        {/*    marginBottom: '5rem',*/}
        {/*    border: '1px solid black',*/}
        {/*    borderRadius: '1rem',*/}
        {/*    background: 'black',*/}
        {/*    padding: '4rem 0',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Col style={{ marginBottom: '2rem', textAlign: 'center', opacity: '50%' }} span={24}>*/}
        {/*    <h2>내 동년배들은 이걸로만 소통했다.</h2>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>*/}
        {/*    <img style={{ width: '10rem', height: '10rem' }} src={laser} alt="profile_image" />*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>*/}
        {/*    <img style={{ width: '10rem', height: '10rem' }} src={garo} alt="profile_image" />*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={8}>*/}
        {/*    <img style={{ width: '10rem', height: '10rem' }} src={slide} alt="profile_image" />*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<div*/}
        {/*  style={{ border: '1px solid black', borderRadius: '1rem', background: 'black', padding: '3rem 0 0 0' }}*/}
        {/*>*/}
        {/*  <Row style={{ marginBottom: '2rem' }}>*/}
        {/*    <Col style={{ textAlign: 'center', opacity: '50%' }} span={24}>*/}
        {/*      <h2> 통화 문자 무제한이던 친구가 부러웠고</h2>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*<Row style={{ marginBottom: '5rem' }}>*/}
        {/*  <Col*/}
        {/*    style={{ display: 'flex', justifyContent: 'center', marginBottom: '5rem', opacity: '50%' }}*/}
        {/*    span={24}*/}
        {/*  >*/}
        {/*    <h2>가끔 이런 문자 오면</h2>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginBottom: '1rem', textAlign: 'center' }} span={16}>*/}
        {/*    <img style={ImageStyle0} src={moon} alt="profile_image" />*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginTop: '7rem', textAlign: 'center', opacity: '50%' }} span={8}>*/}
        {/*    <h5> 하루종일 설렜던 latte</h5>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*</div>*/}
        {/*<Row style={{ border: '1px solid black', background: 'black', opacity: '50%' }}>*/}
        {/*  <Col style={{ display: 'flex', marginTop: '5rem', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>시간이 흘러</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>IT 공룡 등장</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>MZ 세대가 온다</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>Digital Transformation</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }} span={24}>*/}
        {/*    <h3>.</h3>*/}
        {/*  </Col>*/}
        {/*<Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '20vh' }} span={24}>*/}
        {/*  <h3>!!!!</h3>*/}
        {/*</Col>*/}
        {/*  </Row>*/}
        {/*</div>*/}
        {/*<Row>*/}
        {/*  <Col style={{ fontSize: '4rem', color: 'white' }} span={24}>*/}
        {/*    <div>디지털 시대</div>*/}
        {/*  </Col>*/}
        {/*  <Col style={{ marginBottom: '6rem' }} span={24}>*/}
        {/*    <h4>개인에 연결된 채널이 많아졌다.</h4>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        {/*<div style={{ border: '1px solid black', background: 'black' }}>*/}
        {/*  <Row style={{ marginBottom: '5rem' }}>*/}
        {/*    <Col span={24}>*/}
        {/*      <div*/}
        {/*        style={{*/}
        {/*          display: 'flex',*/}
        {/*          justifyContent: 'center',*/}
        {/*          border: '1px solid black',*/}
        {/*          paddingTop: '2rem',*/}
        {/*          flexWrap: 'wrap',*/}
        {/*          background: 'black',*/}
        {/*          borderRadius: '1rem',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <Col style={{ textAlign: 'center', marginBottom: '1rem', opacity: '50%' }} span={24}>*/}
        {/*          <h3>SNS 서비스</h3>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>인스타</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>페이스북</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>유튜브</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>클럽하우스</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={{ position: 'relative', top: '-2rem', right: '.2rem', textAlign: 'center' }} span={24}>*/}
        {/*          <h2 style={{ color: 'white', opacity: '50%' }}>...</h2>*/}
        {/*        </Col>*/}
        {/*      </div>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Row style={{ marginBottom: '3rem' }}>*/}
        {/*    <Col style={{ opacity: '50%', textAlign: 'center' }} span={24}>*/}
        {/*      <h3>나랑은 상관없어 보이던 것들이</h3>*/}
        {/*    </Col>*/}
        {/*    <Col style={{ opacity: '50%', textAlign: 'center' }} span={24}>*/}
        {/*      <h3>IT 서비스가 확장되며 삶 속으로 들어왔다.</h3>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Row style={{ marginBottom: '5rem' }}>*/}
        {/*    <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} span={24}>*/}
        {/*      <img src={github} style={{ width: '24rem', height: '10rem', opacity: '70%' }} alt="github error" />*/}
        {/*    </Col>*/}
        {/*    <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} span={24}>*/}
        {/*      <img src={dang} style={{ width: '24rem', height: '12rem', opacity: '70%' }} alt="dang error" />*/}
        {/*    </Col>*/}
        {/*    <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }} span={24}>*/}
        {/*      <img src={brunch} style={{ width: '24rem', height: '12rem', opacity: '70%' }} alt="brunch error" />*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Row>*/}
        {/*    <Col span={24}>*/}
        {/*      <div*/}
        {/*        style={{*/}
        {/*          display: 'flex',*/}
        {/*          justifyContent: 'center',*/}
        {/*          border: '1px solid black',*/}
        {/*          paddingTop: '2rem',*/}
        {/*          flexWrap: 'wrap',*/}
        {/*          background: 'black',*/}
        {/*          borderRadius: '1rem',*/}
        {/*        }}*/}
        {/*      >*/}
        {/*        <Col style={{ textAlign: 'center', marginBottom: '1rem', opacity: '50%' }} span={24}>*/}
        {/*          <h3>수많은 온라인 서비스</h3>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>인스타</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>페이스북</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>유튜브</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>클럽하우스</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>카카오톡</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>깃헙</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>블로그</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>중고거래</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>포트폴리오</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>재능판매</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>오픈채팅</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={a} span={5}>*/}
        {/*          <h4>데이팅앱</h4>*/}
        {/*        </Col>*/}
        {/*        <Col style={{ position: 'relative', top: '-2rem', right: '.2rem', textAlign: 'center' }} span={24}>*/}
        {/*          <h2 style={{ color: 'white', opacity: '50%' }}>...</h2>*/}
        {/*        </Col>*/}
        {/*      </div>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*  <Row*/}
        {/*    style={{*/}
        {/*      border: '1px solid black',*/}
        {/*      borderRadius: '1rem',*/}
        {/*      background: 'black',*/}
        {/*      paddingTop: '3rem',*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <Col*/}
        {/*      style={{*/}
        {/*        display: 'flex',*/}
        {/*        alignItems: 'center',*/}
        {/*        marginBottom: '3rem',*/}
        {/*        flexDirection: 'column',*/}
        {/*        opacity: '50%',*/}
        {/*      }}*/}
        {/*      span={24}*/}
        {/*    >*/}
        {/*      <h4>문찐 아싸인줄 알았던 나</h4>*/}
        {/*      <h4>사실 SNS 하는 아싸였던 것</h4>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</div>*/}
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>관심 태그 입력</h3>
          </Col>
          <Col style={{ display: 'flex', justifyContent: 'center' }} span={24}>
            <h3>원하는 사람 SNS 찾기</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: '5rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>프로필 생성</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={firstProfile} style={{ width: '30rem', height: '65rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>내용 입력</h1>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={addProfile} style={{ width: '30rem', height: '50rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }} span={24}>
            <h1>링크 입력</h1>
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
        <Row style={{ marginBottom: '2rem' }}>
          <Col style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }} span={24}>
            <img src={search} style={{ width: '30rem', height: '65rem' }} alt="firstProfile" />
          </Col>
        </Row>
        <Row style={{ marginBottom: '10rem' }}>
          <Col style={{ textAlign: 'center' }} span={24}>
            <h1>프로파일러</h1>
          </Col>
          <Col style={{ textAlign: 'center' }} span={24}>
            <h3>주변사람 SNS 찾기</h3>
          </Col>
          <Col style={{ textAlign: 'center' }} span={24}>
            <Link href="/my">
              <a>바로가기</a>
            </Link>
          </Col>
        </Row>
      </div>
    </TopBottomEdit>
  );
};

export default About;
