import React from "react";
import { Link } from "react-router-dom";
import { Image } from "antd";

import {
  HeaderWrapper,
  HeaderContainer,
  LeftContainer,
  ImageContainer,
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
            <ImageContainer>
              <Image
                src="/images/settings.png"
                alt="Logo in Header"
                preview={false}
              />
            </ImageContainer>

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
