import React from "react";
import {
  faUserCircle,
  faUserFriends,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "antd";
import {
  OrganizationWrapper,
  OrganizationContainer,
  ItemContainer,
  Item,
  Title,
  BottomDetail,
  LeftBottom,
  RightBottom,
  Owner,
  Member,
  TextOwner,
  TextUsers,
  CreateAtDate,
  TopContainer,
  TopDetail,
  CustomFontAwesomeIcon,
} from "./style";

const Organization: React.FunctionComponent = () => {
  const a = [1, 2, 3, 4];
  return (
    <OrganizationWrapper>
      <OrganizationContainer>
        <TopContainer>
          <Button>Create Organization</Button>
        </TopContainer>
        {a.map((organization, index) => (
          <ItemContainer key={index}>
            <Item>
              <TopDetail>
                <Title>Corize</Title>
              </TopDetail>

              <BottomDetail>
                <LeftBottom>
                  <Owner>
                    <CustomFontAwesomeIcon icon={faUserCircle} />
                    <TextOwner>Owner: Vien Mai</TextOwner>
                  </Owner>
                  <Member>
                    <CustomFontAwesomeIcon icon={faUserFriends} />
                    <TextUsers>Users: 2</TextUsers>
                  </Member>
                </LeftBottom>
                <RightBottom>
                  <CustomFontAwesomeIcon icon={faCalendarWeek} />
                  <CreateAtDate>
                    {/* {moment(organization.createdAt).format("MMMM Do YYYY")} */}
                    22/3/2012
                  </CreateAtDate>
                </RightBottom>
              </BottomDetail>
            </Item>
          </ItemContainer>
        ))}
      </OrganizationContainer>
    </OrganizationWrapper>
  );
};

export default Organization;
