import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import SelfProfile from "../../components/profile/SelfProfile";
import { ProfileContainer } from "./Profile";
import {
  ItemContainer,
  Margin42,
  Title,
  TitleDes,
  TitleText,
} from "../../pages/friend/Friends";
import Friend from "../../components/friends";

const Profile = () => {
  return (
    <ProfileContainer>
      <Left />
      <Navigator />
      <SelfProfile />

      <div style={{ marginTop: "40px" }}>
        <Title width="309px">
          <TitleText>내가 차단한 친구 목록</TitleText>
          <TitleDes color="false">총 6명</TitleDes>
        </Title>
        <ItemContainer>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendBlock />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendBlock />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendBlock />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendBlock />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendBlock />
          </Friend>
        </ItemContainer>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
