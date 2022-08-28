import React from "react";
import FriendItem from "../../components/common/friend/FriendItem";
import Main from "../../components/main/Main";
import SelfProfile from "../../components/profile/SelfProfile";
import MainStyle from "./main.style";

const MainPage = () => {
  return (
    <MainStyle>
      <Main />
      <SelfProfile />
      <FriendItem />
    </MainStyle>
  );
};

export default MainPage;
