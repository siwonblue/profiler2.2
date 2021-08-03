import React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ImageStyle2, TagSpan } from '../../style/styled';
import { MoreOutlined } from '@ant-design/icons';
import { f0, f1, f2, f3, f4, f5 } from './styles';

const SearchProfileCard = ({ profile }) => {
  const id = profile?.id;
  const exTag = profile?.Hashtags;
  const miTag = exTag?.map((t) => `#${t.name}`);
  const finedTag = miTag?.slice(0, 4);
  return (
    <>
      <div>
        <Row name="profile-card" style={f0}>
          <Col name="profile-image" span={6} style={f1}>
            <Link href="/profile/[id]" as={`/profile/${id}`}>
              <a>
                <img
                  style={ImageStyle2}
                  src={`${profile?.Images?.[0]?.src || `defaultProfile.jpeg`}`}
                  alt="profile_image"
                />{' '}
              </a>
            </Link>
          </Col>
          <Col span={18} style={f2}>
            <Row name="profile-name-edit">
              <Col span={22} style={f3}>
                <Link href="/profile/[id]" as={`/profile/${id}`}>
                  <a>
                    {' '}
                    <h3>{profile?.name}</h3>
                  </a>
                </Link>
              </Col>
              {miTag?.length > 4 ? (
                <Col span={2}>
                  <Link href="/profile/[id]" as={`/profile/${id}`}>
                    <a>
                      {' '}
                      <MoreOutlined style={f4} />
                    </a>
                  </Link>
                </Col>
              ) : (
                <Col span={2}>{null}</Col>
              )}
            </Row>
            <Row name="meta-data" style={f5}>
              <Col span={24} style={f5}>
                {finedTag?.map((tag, j) => (
                  <Link href="/hashtag/[tag]" as={`/hashtag/${tag?.slice(1)}`}>
                    <a>
                      <TagSpan key={j}>{tag}</TagSpan>
                    </a>
                  </Link>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

SearchProfileCard.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string,
    intro: PropTypes.string,
    id: PropTypes.number,
    Hashtags: PropTypes.arrayOf(PropTypes.object),
    ProfileTag: PropTypes.shape({
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  }),

  UserId: PropTypes.number,
  Images: PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    profileId: PropTypes.number,
  }),
};

export default SearchProfileCard;
