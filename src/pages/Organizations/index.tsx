import React from "react";
import { Button } from "antd";

import {
  OrganizationWrapper,
  OrganizationContainer,
  TopContainer,
} from "./style";

const Organization: React.FunctionComponent = () => {
  return (
    <OrganizationWrapper>
      <OrganizationContainer>
        <TopContainer>
          <Button>Create Organization</Button>
        </TopContainer>
      </OrganizationContainer>
    </OrganizationWrapper>
  );
};

export default Organization;
