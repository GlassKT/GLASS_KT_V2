import React from "react";
import styled from "styled-components";
import ChatItem from "./chatitem";

const ChatItemContainer = styled.div``;
const ChatUI = () => {
  const type = "me"; //type
  const children = "server에서 값 가져오기";
  return (
    <ChatItemContainer>
      <ChatItem type={type}>{children}</ChatItem>
    </ChatItemContainer>
  );
};

export default ChatUI;
