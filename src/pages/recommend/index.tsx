import React, { useCallback, useEffect, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { Button, ItemContainer2, Tag } from "../../components/friends/Friend";
import { RecommendContainer, Title, TitleName } from "./Recommend";
import FriendsApi from "../../core/api/friends/Friends.api";

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
      <ItemContainer2>
        {recommend?.map((v) => (
          <Friend item={v}>
            <div style={{ display: "flex", width: "100px", height: "30px" }}>
              {v.hobbie &&
                v.hobbie.map((b) => (
                  <Tag className="tag" key={v}>
                    #{b}
                  </Tag>
                ))}
            </div>
            <div
              style={{
                display: "flex",
                width: "100px",
                height: "30px",
                marginTop: "40px",
              }}
            >
              <Friend.FriendRecommend />
            </div>
          </Friend>
        ))}
      </ItemContainer2>
    </RecommendContainer>
  );
};

export default Recommend;
