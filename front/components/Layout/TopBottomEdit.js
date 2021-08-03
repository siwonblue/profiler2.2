import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import {useRouter} from "next/router";
import { Row, Col } from "antd";
import { topRow, bottomRow } from "../../style/styled";

const TopBottomEdit = ({ children, title, footer, push }) => {
  const { me } = useSelector((state) => state.user);
  const router = useRouter()
  return (
    <>
      <Row style={topRow}>
        <>
          <Col
            style={{
              display: "flex",
              justifyContent: "start",
            }}
            span={8}
          >
            <LeftOutlined onClick={()=>router.push(`/${push}`)}
                          style={{
                            color: "#FFFFFF",
                            fontSize: "2rem",
                            display: "flex",
                            alignItems: "center",
                          }}
            />
          </Col>
          <Col span={8} style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
            <h3>{title}</h3>
          </Col>
          <Col span={8}>
            <LeftOutlined
              style={{
                color: "#FFFFFF",
                border: "1px solid red",
                fontSize: "2rem",
                display: "none",
                alignItems: "center",
              }}
            />
          </Col>
        </>

      </Row>
      <div>{children}</div>
      {footer &&
      <Row style={bottomRow}>
        <Col style={{ textAlign: "center" }} span={24}>
          <Link href='/my'>
            <a>{footer}</a>
          </Link>
        </Col>
      </Row>}
    </>
  );
};

TopBottomEdit.propTypes = {
  title:PropTypes.string.isRequired,
  children: PropTypes.node,
  footer:PropTypes.string
};

export default TopBottomEdit;
