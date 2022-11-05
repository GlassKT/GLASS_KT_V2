import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Back from "../../assets/images/background.png";
import styled from "styled-components";
import TalkProvider from "../../components/chat/talk";
import FriendBar from "../../components/chat/FriendBar";
import ChatItem from "../../components/chat/chatitem/chatitem";

const ChatContainer = styled.div`
  min-height: 100vh;
  padding-left: 250px;
  background: url(${Back});
`;

const ChatPage = () => {
  return (
    <ChatContainer>
      <Left />
      <Navigator />
      <TalkProvider>
        <FriendBar />
        <ChatItem type="me">테스트 글입니다</ChatItem>
      </TalkProvider>
    </ChatContainer>
  );
};

export default ChatPage;
