import React, { useEffect, useState } from "react";
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
import FriendsApi from "../../core/api/friends/Friends.api";

const Profile = () => {
  const [block, setBlock] = useState<any>();

  useEffect(() => {
    FriendsApi.getBlockFriend(setBlock);
  }, []);

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
          {block &&
            block.map((v) => (
              <Friend item={v}>
                <Friend.FriendBlock />
              </Friend>
            ))}
        </ItemContainer>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
