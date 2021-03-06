import { Col, Row } from "antd";

import React, { PropsWithChildren } from "react";
import { useLocation, withRouter } from "react-router-dom";
import { logo, banner } from "@shared/assets/images";

interface IDefaultLayoutProps {}

const AuthLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (
  props
) => {
  return (
    <div className="auth-page">
      <Row>
        <Col xs={0} sm={0} md={0} lg={10} xl={10}>
          <img src={banner} alt="banner" className="banner__img" />
        </Col>

        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <div className="main__box">
            <div className="logo__box">
              <img src={logo} alt="logo" />
            </div>
            {props.children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(AuthLayout);
