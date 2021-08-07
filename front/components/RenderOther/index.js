import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, message, Drawer, Popconfirm, Modal } from 'antd';
import { DivChildren, ImageStyle5, TagSpan } from '../../style/styled';
import { PROFILE_LIKE_REQUEST } from '../../reducers/profile';
import { MoreOutlined } from '@ant-design/icons';
import {
  a0,
  colSt,
  contactMapStyle,
  d0,
  d1,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  drawerStyle,
  DrawWrapper,
  rowSt,
} from './styles';
import Link from 'next/link';
import { b12 } from '../ProfileMapping/styles';

const RenderOther2 = ({ profile }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [showLeftDrawer, setShowLeftDrawer] = useState(false);
  const id = profile?.id;
  const name = profile?.name;
  const intro = profile?.intro;
  const imagePath = profile?.Images?.[0]?.src;
  const Hashtags = profile?.Hashtags;
  const finedTags = Hashtags?.map((t) => `#${t.name}`);
  const Contacts = profile?.Contacts;
  const onToggleLeftDrawer = useCallback(() => {
    setShowLeftDrawer((prev) => !prev);
  });

  let likerId;

  const cancel = (e) => {
    console.log(e);
  };
  const error = () => {
    message.error('자신의 프로필은 불가능합니다.', 0.7);
  };
  const error2 = () => {
    message.error('존재하지 않는 프로필입니다.', 0.7);
  };

  function countDown() {
    let secondsToGo = 7;
    const modal = Modal.success({
      title: '이 프로필를 관심등록 하였습니다.',
      content: `취소는 프로필 편집에서 해주세요.`,
      okText: `확인`,
      style: {
        padding: 'none',
        overflow: 'hidden',
      },
    });
    setTimeout(() => {
      modal.destroy();
    }, secondsToGo * 1000);
  }

  const def = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/defaultProfile.jpeg';

  return (
    <DivChildren>
      <div style={DrawWrapper}>
        <Row name="image" style={d0}>
          <Col span={8} style={d1}>
            <MoreOutlined onClick={onToggleLeftDrawer} style={d2} />
          </Col>

          <Col style={d3} span={8}>
            <img style={ImageStyle5} src={`${imagePath || def}`} alt="profile_image" />
          </Col>
          <Col span={8}>{null}</Col>
        </Row>
        <Row style={d4} name="name">
          <Col style={colSt} span={24}>
            <h3>{name}</h3>
          </Col>
        </Row>
        <Row style={rowSt} name="intro">
          <Col style={colSt} span={24}>
            <h3>{intro}</h3>
          </Col>
        </Row>
        <Drawer
          drawerStyle={drawerStyle}
          placement="left"
          closable={true}
          onClose={onToggleLeftDrawer}
          visible={showLeftDrawer}
          getContainer={false}
          style={d5}
          contentWrapperStyle={d6}
        >
          <div style={d7}>
            <h4 style={d8}>어떤 프로필로 이 프로필을</h4>
            <h4 style={d8}>관심등록 하시겠습니까?</h4>
          </div>
          {me?.profiles?.map((p) => (
            <div style={a0} key={p.id}>
              <Popconfirm
                onConfirm={() => {
                  if (id === p.id) {
                    return error();
                  }
                  if (!id) {
                    return error2();
                  }
                  likerId = p.id;
                  dispatch({
                    type: PROFILE_LIKE_REQUEST,
                    data: { likedId: id, likerId: p.id },
                  });
                  countDown();
                }}
                onCancel={cancel}
                okText="네"
                cancelText="취소"
                title={`${p.name} ---❤️---> ${name}?`}
                style={{ textAlign: 'center' }}
              >
                <button style={d9}>{p.name}</button>
              </Popconfirm>
            </div>
          ))}
        </Drawer>
      </div>
      <Row style={d10} name="tag">
        <Col style={d11} span={24}>
          {finedTags?.map((tag, j) => (
            <Link href="/hashtag/[tag]" as={`/hashtag/${tag.slice(1)}`}>
              <a>
                <TagSpan key={j}>{tag}</TagSpan>
              </a>
            </Link>
          ))}
        </Col>
      </Row>
      <Row name="Contact-header" style={d7}>
        <Col style={d12} span={24}>
          <h1>Contact</h1>
        </Col>
      </Row>
      <Row name="contact-mapping">
        <Col span={24}>
          {Contacts?.length === 0 ? (
            <>
              <h3>연락처가 없네요..</h3>
              <h3 style={d13}>관심을 보내보세요!</h3>
            </>
          ) : (
            <>
              {Contacts?.map((c) => (
                <div key={c?.id} style={contactMapStyle}>
                  <a style={d14} key={c?.id} href={`${c?.url}`} target="_blank" rel="noopener noreferrer">
                    {c?.title}
                  </a>
                </div>
              ))}
            </>
          )}
        </Col>
      </Row>
      <Row name="margin" style={d15}>
        {null}
      </Row>
    </DivChildren>
  );
};

export default RenderOther2;
