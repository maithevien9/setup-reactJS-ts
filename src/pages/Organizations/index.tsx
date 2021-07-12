import React, { useEffect } from "react";
import { Spin } from "antd";
import moment from "moment";
import {
  faUserCircle,
  faUserFriends,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/combineReducers";

import { getOrganization } from "../../store/organizations/action";
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
  const dispatch = useDispatch();

  const { organizations, isFetching } = useSelector(
    (state: RootState) => state.organizations,
  );

  useEffect(() => {
    dispatch(getOrganization());
  }, []);

  return (
    <Spin spinning={isFetching}>
      <OrganizationWrapper>
        <OrganizationContainer>
          <TopContainer>
            <Button>Create Organization</Button>
          </TopContainer>
          {organizations.map((organization: any, index) => (
            <ItemContainer key={index}>
              <Item>
                <TopDetail>
                  <Title>{organization.name}</Title>
                </TopDetail>

                <BottomDetail>
                  <LeftBottom>
                    <Owner>
                      <CustomFontAwesomeIcon icon={faUserCircle} />
                      <TextOwner>
                        {`Owner: ${organization.owner.lastName} ${organization.owner.firstName}`}
                      </TextOwner>
                    </Owner>
                    <Member>
                      <CustomFontAwesomeIcon icon={faUserFriends} />
                      <TextUsers>
                        Users: {organization.members.length}
                      </TextUsers>
                    </Member>
                  </LeftBottom>
                  <RightBottom>
                    <CustomFontAwesomeIcon icon={faCalendarWeek} />
                    <CreateAtDate>
                      {moment(organization.createdAt).format("MMMM Do YYYY")}
                    </CreateAtDate>
                  </RightBottom>
                </BottomDetail>
              </Item>
            </ItemContainer>
          ))}
        </OrganizationContainer>
      </OrganizationWrapper>
    </Spin>
  );
};

export default Organization;
