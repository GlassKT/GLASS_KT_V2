import React, { useCallback } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";
import { Button, ItemContainer2 } from "../../components/friends/Friend";
import usepulfrend from "../../components/smouiler/hook/usepulfrend";
import { RecommendContainer, Title, TitleName } from "./Recommend";

const Recommend = () => {
  const Btn = useCallback(async () => {
    const value = await usepulfrend.componentDidMount();
    console.log(value.data.length);
  }, []);

  return (
    <RecommendContainer>
      <Left />
      <Navigator />
      <Title>
        <TitleName>추천 친구</TitleName>
      </Title>
      <ItemContainer2>
        <Friend
          item={{ id: 1, name: "박성한", hobby: ["#볼링", "#축구", "#코딩"] }}
        >
          <Friend.FriendRecommend />
        </Friend>
        <button onClick={Btn}>sdfadsfdsafh</button>
      </ItemContainer2>
    </RecommendContainer>
  );
};

export default Recommend;
