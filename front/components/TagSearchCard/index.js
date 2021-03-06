import React from 'react';
import { Col, Row } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { ImageStyle2, TagSpan } from '../../style/styled';
import { MoreOutlined } from '@ant-design/icons';
import { a, b, c, d } from './styles';
import { backUrl } from '../../config/config';

const TagSearchCard = ({ profile }) => {
  const id = profile?.[0]?.id;
  const exTag = profile?.[0]?.Hashtags;
  const miTag = exTag?.map((t) => `#${t.name}`);
  const finedTag = miTag?.slice(0, 4);
  const def = 'https://react-profiler2-s3.s3.ap-northeast-2.amazonaws.com/original/public/defaultProfile.jpeg';
  return (
    <>
      <div>
        <Row name="profile-card" style={a}>
          <Col name="profile-image" span={6} style={b}>
            <Link href="/profile/[id]" as={`/profile/${id}`}>
              <a>
                <img style={ImageStyle2} src={`${profile?.[0]?.Images?.[0]?.src || def}`} alt="profile_image" />{' '}
              </a>
            </Link>
          </Col>
          <Col span={18} style={c}>
            <Row name="profile-name-edit">
              <Col
                span={22}
                style={{
                  display: 'flex',
                }}
              >
                <Link href="/profile/[id]" as={`/profile/${id}`}>
                  <a>
                    {' '}
                    <h3>{profile?.[0]?.name}</h3>
                  </a>
                </Link>
              </Col>
              {miTag?.length > 4 ? (
                <Col span={2}>
                  <Link href="/profile/[id]" as={`/profile/${id}`}>
                    <a>
                      {' '}
                      <MoreOutlined style={{ color: '#FFFFFF' }} />
                    </a>
                  </Link>
                </Col>
              ) : (
                <Col span={2}>{null}</Col>
              )}
            </Row>
            <Row name="meta-data" style={d}>
              <Col span={24} style={d}>
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
//
// TagSearchCard.propTypes = {
//   profile: PropTypes.shape({
//     name: PropTypes.string,
//     intro: PropTypes.string,
//     id: PropTypes.number,
//     Hashtags: PropTypes.arrayOf(PropTypes.object),
//     ProfileTag: PropTypes.shape({
//       createdAt: PropTypes.string,
//       updatedAt: PropTypes.string,
//     }),
//   }),
//   UserId: PropTypes.number,
//   Images: PropTypes.shape({
//     id: PropTypes.number,
//     src: PropTypes.string,
//     profileId: PropTypes.number,
//   }),
// };

export default TagSearchCard;
