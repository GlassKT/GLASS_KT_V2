import React, { useEffect, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { ItemContainer2 } from "../../components/friends/Friend";
import FriendsApi from "../../core/api/friends/Friends.api";
import { RecommendContainer, Title, TitleName } from "./Recommend";

const Recommend = () => {
  const [recommend, setRecommend] = useState(null);

  const getRecommend = async () => {
    const res = await FriendsApi.recommendFriend();
    setRecommend(res);
  };

  useEffect(() => {
    getRecommend();
  }, []);

  return (
    <RecommendContainer>
      <Left />
      <Navigator />
      <Title>
        <TitleName>추천 친구</TitleName>
      </Title>
      <ItemContainer2>
        {recommend?.map((v) => (
          <Friend item={v}>
            <Friend.FriendRecommend />
          </Friend>
        ))}
      </ItemContainer2>
    </RecommendContainer>
  );
};

export default Recommend;
