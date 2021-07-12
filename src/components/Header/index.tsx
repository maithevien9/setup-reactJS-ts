import React from "react";
import { Link } from "react-router-dom";

import {
  HeaderWrapper,
  HeaderContainer,
  LeftContainer,
  CustomUl,
  CustomLabel,
} from "./style";
import { HOME_ROUTE, ORGANIZATION_ROUTE } from "../../constants/routes";

const Header: React.FunctionComponent = () => {
  return (
    <header>
      <HeaderWrapper>
        <HeaderContainer>
          <LeftContainer>
            <CustomUl>
              <li>
                <Link to={HOME_ROUTE}>
                  <CustomLabel>Dashboard</CustomLabel>
                </Link>
              </li>
              <li>
                <Link to={ORGANIZATION_ROUTE}>
                  <CustomLabel>Organization</CustomLabel>
                </Link>
              </li>
            </CustomUl>
          </LeftContainer>
        </HeaderContainer>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
