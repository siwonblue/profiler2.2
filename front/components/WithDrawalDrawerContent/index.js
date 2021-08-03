import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from "antd";
import { btnStyle, divStyle } from "./styles";

const WithDrawalDrawerContent = ({ onAction, test, action }) => {
  return (
    <>
      <div style={divStyle}>
        <Row>
          <Col span={24}>
            <div>{action} 하시겠습니까?</div>
          </Col>
          <Col style={{marginBottom:'2rem'}} span={24}>
            <div>모든 정보는 삭제 됩니다.</div>
          </Col>
          <Col span={12}>
            <button style={btnStyle}   onClick={test}>{action} 취소</button>
          </Col>
          <Col span={12}>
            <button style={btnStyle}  onClick={onAction}>{action} 하기</button>
          </Col>
        </Row>
      </div>
    </>
  );
};

WithDrawalDrawerContent.prototype = {
  onAction: PropTypes.func.isRequired,
  test: PropTypes.func.isRequired,
  action: PropTypes.string,
};

export default WithDrawalDrawerContent;
