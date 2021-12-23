import { Form, Input } from "antd";
import {
  ExclamationCircleOutlined,
  SecurityScanOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState, useMemo } from "react";
import { useIntl } from "react-intl";
import { useHistory } from "react-router-dom";
import { useAsync } from "@hook/useAsync";
import authenticationPresenter from "@modules/authentication/presenter";
import NavLinkBottom from "../components/NavLinkBottom";
const ForgotPassword = () => {
  const history = useHistory();
  const intl = useIntl();
  const { forgotPass } = authenticationPresenter;
  const [forgotPasscall] = useAsync(forgotPass);
  const [checkError, setCheckError] = useState("");
  const [checkSuccessEmail, setCheckSuccessEmail] = useState<boolean>(false);
  const useTranslate = (key: string) => {
    return intl.formatMessage({ id: key });
  };
  const onFinishFailed = (errorInfo: any) => {
    setCheckError("");
  };
  const renderError = useMemo(() => {
    if (checkError == "" || checkError == null) return false;
    return (
      <div className="error-status">
        <ExclamationCircleOutlined />
        <p>{checkError}</p>
      </div>
    );
  }, [checkError]);
  const onSubmitEmail = (values: any) => {
    forgotPasscall
      .execute(values)
      .then((res) => {
        setCheckSuccessEmail(true);
      })
      .catch((err) => {
        setCheckError(useTranslate("forgot.password.email.not.exit"));
      });
  };
  return (
    <>
      <div className="main-form forgot-password-form">
        <h1 className="main-title">{useTranslate("Cấp lại mật khẩu")}</h1>
        {!checkSuccessEmail ? (
          <>
            <div className="content-form">
              <Form
                name="forgotPassword"
                layout="vertical"
                onFinish={onSubmitEmail}
                onFinishFailed={onFinishFailed}
                requiredMark={false}
              >
                <div className="inputuser">
                  <Form.Item
                    label={useTranslate("Tên đăng nhập")}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: `${useTranslate("Thông báo:")} ${useTranslate(
                          "Vui lòng nhập tên đăng nhập"
                        )}`,
                      },
                      {
                        type: "string",
                      },
                    ]}
                  >
                    <Input prefix={<UserOutlined />} />
                  </Form.Item>
                </div>
                <div className="inputma">
                  <Form.Item
                    label={useTranslate("Mã xác thực")}
                    name="id"
                    rules={[
                      {
                        required: true,
                        message: `${useTranslate("Thông báo:")} ${useTranslate(
                          "mời bạn nhập mã xác thực"
                        )}`,
                      },
                      {
                        type: "string",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </div>

                <div>{renderError}</div>
                <Form.Item>
                  <div className="button-center__box2">
                    <button type="submit" className="normal-button">
                      {useTranslate("Cấp lại mật khẩu")}
                    </button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </>
        ) : (
          <div className="status__box">
            <p>{useTranslate("forgot.password.notification")}</p>
          </div>
        )}
      </div>
      <div className="link-button2">
        <NavLinkBottom
          navLink={useTranslate(" < Quay lại trang chủ")}
          onClick={() => history.push("/login")}
        />
      </div>
    </>
  );
};
export default ForgotPassword;
