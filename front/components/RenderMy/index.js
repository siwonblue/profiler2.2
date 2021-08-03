import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Button, Form } from 'antd';
import { DownCircleFilled, LeftOutlined, RightOutlined, UpCircleFilled, DeleteOutlined } from '@ant-design/icons';
import { DivChildren, ImageStyle, TagSpan } from '../../style/styled';
import { ADD_CONTACT_REQUEST, DELETE_CONTACT_REQUEST } from '../../reducers/profile';
import useInput from '../../hooks/useInput';
import Link from 'next/link';
import {
  c0,
  c1,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c2,
  c20,
  c21,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
} from './styles';

const RenderMy = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { addContactLoading, addContactDone } = useSelector((state) => state.profile);
  const profiles = me?.profiles;
  const len = profiles?.length;
  const [profileNumb, setProfileNumb] = useState(0);
  const [contactFormOpened, setContactFormOpened] = useState(false);
  const profileId = profiles?.[profileNumb]?.id;
  const [title, changeTitle, setTitle] = useInput('');
  const [url, changeUrl, setUrl] = useInput('');
  const finedTags = profiles?.[profileNumb]?.Hashtags?.map((t) => `#${t.name}`);
  // console.log(profiles?.[profileNumb]?.Hashtags)

  const onRight = () => {
    if (profileNumb !== len - 1) {
      // eslint-disable-next-line no-return-assign
      setProfileNumb((prev) => (prev += 1));
    }
  };
  const onLeft = () => {
    if (profileNumb !== 0) {
      // eslint-disable-next-line no-return-assign
      setProfileNumb((prev) => (prev -= 1));
    }
  };

  const onToggleContactForm = useCallback(() => {
    setContactFormOpened((prev) => !prev);
  }, []);
  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_MY_INFO_REQUEST,
  //   });
  // }, []);

  useEffect(() => {
    if (addContactDone) {
      setTitle('');
      setUrl('');
    }
  }, [addContactDone]);

  const onSubmit = useCallback(() => {
    dispatch({
      type: ADD_CONTACT_REQUEST,
      data: { title, url, profileId },
    });
    setContactFormOpened((prev) => !prev);
  }, [title, url, profileId]);

  const rowSt = {
    color: '#FFFFFF',
  };
  const colSt = {
    color: '#FFFFFF',
    textAlign: 'center',
  };

  const contactMapStyle = {
    background: '#0B0B15',
    borderRadius: '2rem',
    padding: '1.3rem 1rem',
    textAlign: 'center',
    marginBottom: '1.2rem',
  };
  const contactStyle = {
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    borderBottom: '1.5px solid black',
    background: 'none',
    marginBottom: '1rem',
    color: '#FFFFFF',
  };

  const arrowStyle = {
    color: '#FFFFFF',
    opacity: '50%',
    fontSize: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  const arrowStyle1 = {
    color: '#FFFFFF',
    fontSize: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
  console.log(`🔥🔥🔥🔥🔥🔥profiles?.[profileNumb]?.Images :${profiles?.[profileNumb]?.Images?.[0]}`);

  return (
    <>
      <DivChildren>
        {len === 0 ? (
          <div style={c0}>
            <h2>프로필을 만들어 주세요 🥲</h2>
          </div>
        ) : (
          <>
            <Row name="image">
              <Col style={c1} span={8}>
                {profileNumb === 0 ? (
                  <LeftOutlined style={arrowStyle} />
                ) : (
                  <LeftOutlined onClick={onLeft} style={arrowStyle1} />
                )}
              </Col>
              <Col style={c2} span={8}>
                <img
                  style={ImageStyle}
                  src={`${profiles?.[profileNumb]?.Images?.[0]?.src || `defaultProfile.jpeg`}`}
                  alt="profile_image"
                />
              </Col>
              <Col style={c3} span={8}>
                {profileNumb < len - 1 ? (
                  <RightOutlined onClick={onRight} style={arrowStyle1} />
                ) : (
                  <RightOutlined style={arrowStyle} />
                )}
              </Col>
            </Row>
            <Row style={c4} name="name">
              <Col style={colSt} span={24}>
                <h3>{profiles?.[profileNumb]?.name}</h3>
              </Col>
            </Row>
            <Row style={rowSt} name="intro">
              <Col style={colSt} span={24}>
                <h3>{profiles?.[profileNumb]?.intro}</h3>
              </Col>
            </Row>
            <Row style={c5} name="tag">
              <Col style={c6} span={24}>
                {/*{profiles?.[profileNumb]?.Hashtags.map((p) => (*/}
                {/*  <TagSpan style={{ fontSize: '1.5rem', padding: '.3rem 1.3rem' }} key={p.id}>*/}
                {/*    {p.name}*/}
                {/*  </TagSpan>*/}
                {/*))}*/}
                {finedTags.map((p, j) => (
                  <TagSpan style={c7} key={j}>
                    {p}
                  </TagSpan>
                ))}
              </Col>
            </Row>
            <Row name="Contact-header" style={c8}>
              <Col style={c9} span={9}>
                <h1>Contact</h1>
              </Col>
              <Col style={c10} span={15}>
                {contactFormOpened ? (
                  <UpCircleFilled onClick={onToggleContactForm} style={c11} />
                ) : (
                  <DownCircleFilled onClick={onToggleContactForm} style={c11} />
                )}
                {profiles?.[profileNumb]?.Contacts.length === 0 ? (
                  <h3 style={c12}>링크 등록하기</h3>
                ) : (
                  <Link href="https://naver.com">
                    <a rel="noopener noreferrer">
                      <h3 style={c13}>카톡 공유하기</h3>
                    </a>
                  </Link>
                )}
              </Col>
            </Row>
            {contactFormOpened && (
              <>
                <Row style={c14} name="contact-input">
                  <Col span={24}>
                    <div>
                      <Form style={c15} onFinish={onSubmit} autoComplete="off">
                        <input
                          style={contactStyle}
                          value={title}
                          onChange={changeTitle}
                          name="contact-title"
                          type="text"
                          placeholder="인스타그램"
                          required
                        />
                        <input
                          style={contactStyle}
                          value={url}
                          onChange={changeUrl}
                          name="contact-url"
                          type="text"
                          placeholder="www.instagram.com/sampling_2"
                          required
                        />
                        <Button style={c16} htmlType="submit" loading={addContactLoading}>
                          <div style={c17}>ADD</div>
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </>
            )}
            <Row name="contact-mapping">
              <Col span={24}>
                {profiles?.[profileNumb]?.Contacts?.map((c) => (
                  <Row style={contactMapStyle}>
                    <Col span={8}>{null}</Col>
                    <Col span={8}>
                      <div>
                        <a style={c18} key={c?.id} href={`${c?.url}`} target="_blank" rel="noopener noreferrer">
                          {c?.title}
                        </a>
                      </div>
                    </Col>
                    <Col style={c19} span={8}>
                      <DeleteOutlined
                        onClick={() => {
                          dispatch({
                            type: DELETE_CONTACT_REQUEST,
                            data: { contactId: c.id, profileId: profiles?.[profileNumb]?.id },
                          });
                        }}
                        style={c20}
                      />
                    </Col>
                  </Row>
                ))}
              </Col>
            </Row>
            <Row name="margin" style={c21}>
              {null}
            </Row>{' '}
          </>
        )}
      </DivChildren>
    </>
  );
};

export default RenderMy;
