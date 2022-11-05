import React, { useCallback, useEffect, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Friend from "../../components/friends";

import FriendsApi from "../../core/api/friends/Friends.api";
import {
  FriendsContainer,
  ItemContainer,
  Title,
  TitleDes,
  TitleText,
  Margin42,
} from "./Friends";

const Friends = () => {
  const [waitFreinds, setWaitFreinds] = useState<any>(null);
  const [freinds, setFreinds] = useState<any>(null);

  useEffect(() => {
    a();
  }, []);

  const a = async () => {
    const value = await FriendsApi.getWaitFriend(setWaitFreinds);
    setWaitFreinds(value);
    const value2 = await FriendsApi.getFriend(setFreinds);
    console.log(value2);
    setFreinds(value2);
  };

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
          {waitFreinds &&
            waitFreinds.map((v) => (
              <Friend item={v} key={v.id}>
                <Friend.FriendRequest />
              </Friend>
            ))}
        </ItemContainer>
      </Margin42>
      <Margin42>
        <Title width="309px">
          <TitleText>친구목록</TitleText>
          <TitleDes color="false">총 {freinds && freinds.length}명</TitleDes>
        </Title>
        <ItemContainer>
          {freinds &&
            freinds.map((v) => (
              <Friend item={v} key={v.id}>
                <Friend.FriendList />
              </Friend>
            ))}
        </ItemContainer>
      </Margin42>
    </FriendsContainer>
  );
};

export default Friends;
