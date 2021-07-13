import React, { useState } from "react";
import { Button } from "antd";

import {
  OrganizationWrapper,
  OrganizationContainer,
  TopContainer,
} from "./style";
import CreateOrganization from "../../modals/CreateOrganization/index";

const Organization: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeIsOpen = (status: boolean): void => {
    setIsOpen(status);
  };

  return (
    <OrganizationWrapper>
      <OrganizationContainer>
        <TopContainer>
          <Button
            onClick={() => {
              handleChangeIsOpen(true);
            }}
          >
            Create Organization
          </Button>
        </TopContainer>
      </OrganizationContainer>

      <CreateOrganization
        isOpen={isOpen}
        handleCancel={() => {
          handleChangeIsOpen(false);
        }}
      />
    </OrganizationWrapper>
  );
};

export default Organization;
