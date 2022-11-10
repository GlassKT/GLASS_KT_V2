import React, { useCallback, useEffect, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { Button, ItemContainer2, Tag } from "../../components/friends/Friend";
import { RecommendContainer, Title, TitleName } from "./Recommend";
import FriendsApi from "../../core/api/friends/Friends.api";
import { ItemContainer, Margin42 } from "../friend/Friends";

const Recommend = () => {
  const [recommend, setRecommend] = useState(null);

  const getRecommend = async () => {
    const res = await FriendsApi.recommendFriend();
    setRecommend(res);
  };

  useEffect(() => {
    console.log("요청보냄");
    getRecommend();
  }, []);

  return (
    <RecommendContainer>
      <Left />
      <Navigator />
      <Title>
        <TitleName>추천 친구</TitleName>
      </Title>
      <Margin42>
        <ItemContainer>
          {recommend &&
            recommend.map((v) => (
              <Friend item={v} key={v.id}>
                <Friend.FriendList />
              </Friend>
            ))}
        </ItemContainer>
      </Margin42>
    </RecommendContainer>
  );
};

export default Recommend;
