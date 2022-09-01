import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import {
  FriendsContainer,
  ItemContainer,
  Title,
  TitleDes,
  TitleText,
  Margin42,
} from "./Friends";

const Friends = () => {
  return (
    <FriendsContainer>
      <Left />
      <Navigator />
      <Margin42>
        <Title width="309px">
          <TitleText>친구 요청</TitleText>
          <TitleDes color="true">받은 요청</TitleDes>
          <TitleDes color="false">전송한 요청</TitleDes>
        </Title>
        <ItemContainer>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendRequest />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendRequest />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendRequest />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendRequest />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendRequest />
          </Friend>
        </ItemContainer>
      </Margin42>
      <Margin42>
        <Title width="309px">
          <TitleText>친구 요청</TitleText>
          <TitleDes color="true">받은 요청</TitleDes>
          <TitleDes color="false">전송한 요청</TitleDes>
        </Title>
        <ItemContainer>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendList />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendList />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendList />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendList />
          </Friend>
          <Friend
            item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
          >
            <Friend.FriendList />
          </Friend>
        </ItemContainer>
      </Margin42>
    </FriendsContainer>
  );
};

export default Friends;