import styled from "styled-components";
import { Form, Button } from "antd";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 600px;
  margin-top: -100px;
`;

export const TopContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomLabel = styled.label`
  margin-left: 50px;
`;

export const TextForgot = styled.button`
  border: none;
  background: none;

  &:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextLeft = styled.div``;

export const TextRight = styled(Button)`
  margin-left: 6px;
  border: none;
  background: none;
  box-shadow: none;
`;

export const CustomFormItem = styled(Form.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0px;
  margin-top: -56px;
`;

export const CustomButton = styled(Button)`
  font-weight: normal;
  color: black;
  padding: 0;
`;
