import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Back from "../../assets/images/background.png";
import styled from "styled-components";
import TalkProvider from "../../components/chat/talk";
import FriendBar from "../../components/chat/FriendBar";

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
        <div>{/* <Chat */}</div>
      </TalkProvider>
    </ChatContainer>
  );
};

export default ChatPage;
