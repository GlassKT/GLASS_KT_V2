import React from "react";
import useNavBar from "./hooks/useNavigator";

const Navigator = () => {
  useNavBar();
  return (
    <ul>
      <li>홈</li>
      <li>친구</li>
      <li>추천 친구</li>
      <li>채팅</li>
      <li>내 프로필</li>
    </ul>
  );
};

export default Navigator;
