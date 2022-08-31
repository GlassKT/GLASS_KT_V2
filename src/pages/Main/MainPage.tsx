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
      <Friend item={{ name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}>
        <Friend.FriendRequest />
      </Friend>
      <Friend item={{ name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}>
        <Friend.FriendList />
      </Friend>
      <Friend item={{ name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}>
        <Friend.FriendBlock />
      </Friend>
    </MainStyle>
  );
};

export default MainPage;
