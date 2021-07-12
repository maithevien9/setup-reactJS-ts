import styled from "styled-components";
import { Image } from "antd";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  margin: 0;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const HeaderContainer = styled.div`
  width: 80%;
  height: 60px;
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 500px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightContainer = styled.div`
  width: 400px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CustomImage = styled(Image)`
  border-radius: 25px;
  height: 60px;
  width: 60px;
`;

export const ImageContainer = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background: none;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 400px;
  list-style-type: none;
  margin-left: -10px;
  height: 45px;
`;

export const CustomLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px;

  &:hover {
  }
`;
