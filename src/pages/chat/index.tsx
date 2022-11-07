import React, { createContext, memo, useEffect, useRef, useState } from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import Back from "../../assets/images/background.png";
import styled from "styled-components";
import TalkProvider from "../../components/chat/talk";

const ChatContainer = styled.div`
  min-height: 100vh;
  padding-left: 250px;
  background: url(${Back});
`;

const ChatPage = memo(() => {
  return (
    <ChatContainer>
      <Left />
      <Navigator />
      <TalkProvider />
    </ChatContainer>
  );
});

export default ChatPage;
