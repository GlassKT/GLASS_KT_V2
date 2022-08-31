import React from "react";
import Friend from "../../components/friends";
import Main from "../../components/main/Main";
import SelfProfile from "../../components/profile/SelfProfile";
import MainStyle from "./main.style";

const MainPage = () => {
  return (
    <MainStyle>
      <Main />
      <SelfProfile />
      <Friend>
        <Friend.FriendRequest />
      </Friend>
      <Friend>
        <Friend.FriendList />
      </Friend>
      <Friend>
        <Friend.FriendBlock />
      </Friend>
    </MainStyle>
  );
};

export default MainPage;
