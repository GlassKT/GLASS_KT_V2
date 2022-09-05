import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { ItemContainer2 } from "../../components/friends/Friend";
import { RecommendContainer, Title, TitleName } from "./Recommend";

const Recommend = () => {
  return (
    <RecommendContainer>
      <Left />
      <Navigator />
      <Title>
        <TitleName>추천 친구</TitleName>
      </Title>
      <ItemContainer2>
        <Friend
          item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
        <Friend
          item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
        <Friend
          item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
        <Friend
          item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
        <Friend
          item={{ id: 1, name: "박성한", tags: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
      </ItemContainer2>
    </RecommendContainer>
  );
};

export default Recommend;
