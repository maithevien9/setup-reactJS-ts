import styled from "styled-components";
import { Button, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OrganizationWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 120px;
  border: none;
`;

export const OrganizationContainer = styled.div`
  padding: 10px 0;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ItemContainer = styled(Button)`
  height: 110px;
  width: 430px;
  display: flex;
  border: none;
  margin-bottom: 1px;
  padding-top: 12px;
  margin: 6px;
  border: 1px solid black;

  &:hover {
    box-shadow: none;
  }
`;

export const Item = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.label`
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const BottomDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftBottom = styled.div``;

export const RightBottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Owner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Member = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CustomFontAwesomeIcon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
`;

export const TextOwner = styled.label`
  margin-left: 12px;
  font-size: 14px;
  font-weight: normal;
`;

export const TextUsers = styled.label`
  margin-left: 12px;
  font-size: 14px;
  font-weight: normal;
`;

export const CreateAtDate = styled.div`
  font-size: 14px;
  font-weight: normal;
  margin-left: 10px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 10px;
  padding-left: 6px;
`;

export const CustomMenu = styled(Dropdown)`
  position: absolute;
  right: 15px;
  top: 20px;
`;

export const TopDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonMenu = styled.button`
  display: flex;
  border: none;
  background: none;
  padding: 0;
`;
