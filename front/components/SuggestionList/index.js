import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_SUGGESTION_REQUEST } from '../../reducers/profile';
import { Col, Input, Row } from 'antd';
import Link from 'next/link';
import { ImageStyle6 } from '../../style/styled';
import { a, a0, b, c, d, e, f } from './styles';
import { backUrl } from '../../config/config';
import tag from '../../public/tag.png';

const SuggestionA = ({ showDiv, onTrue, onFalse }) => {
  const [input, onChangeInput, setInput] = useInput('');
  // const [showDiv, setShowDiv] = useState(false);
  const dispatch = useDispatch();
  const { suggestion } = useSelector((state) => state.profile);
  const maxLength = 8;
  const def = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/defaultProfile.jpeg';
  const tag = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/tag.png';
  useEffect(() => {
    if (input) {
      dispatch({
        type: LOAD_SUGGESTION_REQUEST,
        data: input,
      });
    }
  }, [input]);

  let profileWithTag = suggestion?.profileWithTag;
  let profiles = suggestion?.profiles;
  // const onTrue = useCallback(() => {
  //   setShowDiv(true);
  // });
  // const onFalse = useCallback(() => {
  //   setShowDiv(false);
  // });
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);
  return (
    <>
      <div onClick={stopPropagation} style={a0}>
        <Input allowClear onFocus={onTrue} onChange={onChangeInput} type="text" maxLength={maxLength} />
        {showDiv && (
          <div style={a}>
            <div style={b}>
              <button style={c} onClick={onFalse}>
                ❌
              </button>
            </div>
            {profiles?.length + profileWithTag?.length === 0 ? <div>검색결과없음.</div> : null}
            <ul style={{ margin: 'none' }}>
              {profileWithTag?.map((a) => (
                <li>
                  <Row key={a?.[0]?.id}>
                    <Col style={d} span={6}>
                      <img style={ImageStyle6} src={tag} alt="tag" />
                    </Col>
                    <Col span={18}>
                      <Row>
                        <Col span={24}>
                          <Link href="/hashtag/[tag]" as={`/hashtag/${a?.[0]?.Hashtags?.[0]?.name}`}>
                            <a>
                              <h3 style={e}>#{a?.[0]?.Hashtags?.[0]?.name}</h3>
                            </a>
                          </Link>
                        </Col>
                        <Col span={24}>
                          <div>프로필 : {a.length} 개</div>
                        </Col>
                      </Row>
                    </Col>
                    <hr style={f} />
                  </Row>
                </li>
              ))}
            </ul>
            <ul>
              {profiles?.map((p) => (
                <li>
                  <Row key={p?.id}>
                    <Col style={d} span={6}>
                      <Link href="/profile/[id]" as={`/profile/${p?.id}`}>
                        <a>
                          <img style={ImageStyle6} src={`${p?.Images[0]?.src || def}`} alt="profile_image" />
                        </a>
                      </Link>
                    </Col>
                    <Col span={18}>
                      <Row>
                        <Col span={24}>
                          <Link href="/profile/[id]" as={`/profile/${p?.id}`}>
                            <a>
                              <h3 style={e}>{p?.name}</h3>
                            </a>
                          </Link>
                        </Col>
                        <Col span={24}>
                          <div>{p?.intro}</div>
                        </Col>
                      </Row>
                    </Col>
                    <hr style={f} />
                  </Row>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

SuggestionA.propTypes = {
  onTrue: PropTypes.func.isRequired,
  onFalse: PropTypes.func.isRequired,
  showDiv: PropTypes.bool.isRequired,
};

export default SuggestionA;
