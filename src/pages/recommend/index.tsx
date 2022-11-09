import React, { useCallback, useEffect, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { Button, ItemContainer2 } from "../../components/friends/Friend";
import usepulfrend from "../../components/smouiler/hook/usepulfrend";
import { RecommendContainer, Title, TitleName } from "./Recommend";
import FriendsApi from "../../core/api/friends/Friends.api";

const Recommend = () => {
  const [recommend, setRecommend] = useState(null);

  const Btn = useCallback(async () => {
    const value = await usepulfrend.componentDidMount();
    console.log(value.data.length);
  }, []);

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
