import React, { useCallback } from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ImageStyle2 } from '../../style/styled';
import { PROFILE_UNLIKE_REQUEST } from '../../reducers/profile';
import { useDispatch } from 'react-redux';
import { a, b, c, d, e } from "./styles";


const LikingProfileCard = ({ liking, likerId }) => {
  const dispatch = useDispatch();
  const likingId = liking?.id;
  const onUnlike = useCallback(() => {
    dispatch({
      type: PROFILE_UNLIKE_REQUEST,
      data: { likingId, likerId  },
    });
  });

  return (
    <Col span={12}>
      <Row
        name="profile-card"
        style={a}
      >
        <Col
          name="profile-image"
          span={12}
          style={b}
        >
          <Link href="/profile/[id]" as={`/profile/${liking?.id}`}>
            <a>
              <img
                style={ImageStyle2}
                src={`${liking?.Images[0]?.src || `defaultProfile.jpeg`}`}
                alt="profile_image"
              />{' '}
            </a>
          </Link>
        </Col>
        <Col
          span={12}
          style={c}
        >
          <Row name="profile-meta">
            <Col
              span={24}
              style={d}
            >
              <Link href="/profile/[id]" as={`/profile/${liking?.id}`}>
                <a>
                  { liking?.name.length > 5 ?
                    <h4>{liking?.name.slice(0,5)} ・・・</h4>
                    :
                    <h4>{liking?.name}</h4>
                  }
                </a>
              </Link>
            </Col>
            <Col style={d} span={24}>
              <button
                onClick={onUnlike}
                style={e}
              >
                관심취소
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

LikingProfileCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  liking: PropTypes.shape({
    name: PropTypes.string,
    intro: PropTypes.string,
    id: PropTypes.number,
    Hashtags: PropTypes.arrayOf(PropTypes.object),
    ProfileTag: PropTypes.shape({
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  }),
  likerId:PropTypes.number.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  UserId: PropTypes.number,
  // eslint-disable-next-line react/require-default-props
  Images: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    profileId: PropTypes.number,
  }),
};

export default LikingProfileCard;
