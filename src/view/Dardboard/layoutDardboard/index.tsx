import { Col, Row } from "antd";

import React, { PropsWithChildren } from "react";
import { useLocation, withRouter } from "react-router-dom";

interface IDefaultLayoutProps {}

const layoutDardboard: React.FC<PropsWithChildren<IDefaultLayoutProps>> = (
  props
) => {
  return <div className="auth-page"></div>;
};

export default React.memo(layoutDardboard);
