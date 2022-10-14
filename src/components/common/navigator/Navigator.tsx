import React from "react";
import { Link } from "react-router-dom";
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
      <Li>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          홈
        </Link>
      </Li>
      <Li>
        <Link to="/friends" style={{ textDecoration: "none", color: "black" }}>
          친구
        </Link>
      </Li>
      <Li>
        <Link to="/recomand" style={{ textDecoration: "none", color: "black" }}>
          추천 친구
        </Link>
      </Li>
      <Li>
        <Link to="/chat" style={{ textDecoration: "none", color: "black" }}>
          채팅
        </Link>
      </Li>
      <Li>
        <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
          내 프로필
        </Link>
      </Li>
    </NavigatorContainer>
  );
};

export default Navigator;
