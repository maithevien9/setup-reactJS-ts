import React from "react";
import { Form, Input, Button } from "antd";
import { unwrapResult } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/index";
import { login } from "../../store/auth/actions";
import { authState } from "../../store/auth/slice";

import {
  LoginContainer,
  TopContainer,
  ButtonContainer,
  CustomLabel,
  BottomContainer,
  TextLeft,
  TextRight,
  LoginWrapper,
  CustomFormItem,
  Title,
  CustomButton,
} from "./style";

import { ORGANIZATION_ROUTE } from "../../constants/routes";
import { FormDataLogin } from "../../models/index";

const Home: React.FunctionComponent = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { isSubmitting } = useAppSelector(authState);

  const handleLogin = (formData: FormDataLogin): void => {
    dispatch(login(formData))
      .then(unwrapResult)
      .then(() => {
        history.push(ORGANIZATION_ROUTE);
      });
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <TopContainer>
          <Title>Login</Title>
        </TopContainer>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleLogin}
        >
          <CustomLabel htmlFor="email">Email</CustomLabel>
          <CustomFormItem
            name="email"
            rules={[
              { required: true, message: "Email address is required!" },
              {
                type: "email",
                message: "Invalid email address.",
              },
            ]}
          >
            <Input />
          </CustomFormItem>
          <CustomLabel htmlFor="password">Password</CustomLabel>
          <CustomFormItem
            name="password"
            rules={[
              { required: true, message: "Password is required!" },
              {
                min: 6,
                max: 30,
                message: "Password must have from 6 to 30 characters.",
              },
            ]}
          >
            <Input.Password />
          </CustomFormItem>

          <CustomFormItem>
            <ButtonContainer>
              <CustomButton type="link">Forgot your password?</CustomButton>
              <Button type="primary" htmlType="submit" loading={isSubmitting}>
                Login
              </Button>
            </ButtonContainer>
          </CustomFormItem>
        </Form>
        <BottomContainer>
          <TextLeft>Need an account?</TextLeft>
          <TextRight>Register</TextRight>
        </BottomContainer>
      </LoginContainer>
    </LoginWrapper>
  );
};

export default Home;
