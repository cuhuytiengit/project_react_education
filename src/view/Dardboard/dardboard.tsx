import { Form, Input, Checkbox, Button } from "antd";
import {
  ExclamationCircleOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState, useMemo } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useAsync } from "@hook/useAsync";
import authenticationPresenter from "@modules/authentication/presenter";
import NavLinkBottom from "./components/NavLinkBottom";
import { useAltaIntl } from "@shared/hook/useTranslate";

const Dardboard = () => {
  const history = useHistory();
  const location = useLocation();
  const [loginByAccount] = useAsync();
  const [checkError, setCheckError] = useState("");
  const { formatMessage } = useAltaIntl();
  const onFinishFailed = (errorInfo: any) => {
    setCheckError("");
  };

  return <></>;
};
export default Dardboard;
