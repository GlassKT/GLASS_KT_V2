import React from "react";
import styled from "styled-components";
import useNavBar from "./hooks/useNavigator";

const NavigatorContainer = styled.ul`
  width: 545px;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #000000;
`;

const Navigator = () => {
  useNavBar();
  return (
    <NavigatorContainer>
      <Li>홈</Li>
      <Li>친구</Li>
      <Li>추천 친구</Li>
      <Li>채팅</Li>
      <Li>내 프로필</Li>
    </NavigatorContainer>
  );
};

export default Navigator;
