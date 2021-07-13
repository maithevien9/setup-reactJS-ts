import styled from "styled-components";
import { Modal, Form, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CreateOrganizationWrapper = styled(Modal)`
  max-width: 600px;
  border: none;
`;

export const Container = styled.div`
  margin-top: 40px;
`;

export const ButtonContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;

export const CustomLabel = styled.label`
  font-weight: bold;
  margin-left: 50px;
`;

export const CustomFormItem = styled(Form.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
`;

export const CustomButton = styled(Button)`
  margin-left: 10px;
`;

export const Users = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 50px;
  max-height: 300px;
  overflow-y: scroll;
`;

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  border-radius: 50%;
  height: 14px;
  width: 14px;
`;

export const InformationUser = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextName = styled.label`
  text-align: center;
  width: 120px;
`;
