import React from "react";
import { Form, Input } from "antd";

import {
  CreateOrganizationWrapper,
  Container,
  CustomLabel,
  CustomFormItem,
  ButtonContainer,
  CustomButton,
} from "./style";

interface CreateOrganizationProps {
  isOpen: boolean;
  handleCancel: () => void;
}

const CreateOrganization = (props: CreateOrganizationProps) => {
  const { isOpen, handleCancel } = props;
  const onFinish = () => {};

  return (
    <CreateOrganizationWrapper
      visible={isOpen}
      onCancel={handleCancel}
      footer={null}
      closable={false}
    >
      <Container>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <CustomLabel htmlFor="name">Name Organization</CustomLabel>
          <CustomFormItem
            name="name"
            rules={[
              {
                required: true,
                message: "Name organization is required!!",
              },
            ]}
          >
            <Input />
          </CustomFormItem>
          <CustomFormItem>
            <ButtonContainer>
              <CustomButton onClick={handleCancel}>Cancel</CustomButton>
              <CustomButton type="primary" htmlType="submit">
                Create
              </CustomButton>
            </ButtonContainer>
          </CustomFormItem>
        </Form>
      </Container>
    </CreateOrganizationWrapper>
  );
};

export default CreateOrganization;
