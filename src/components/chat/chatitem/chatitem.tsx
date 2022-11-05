import React from "react";
import styled from "styled-components";
interface ChatItemType {
  type: "me" | "other";
  children?: React.ReactNode;
}
interface DescriptionProp {
  type: "me" | "other";
}
const Description = styled.div<DescriptionProp>`
  max-width: 300px;
  max-height: 50px;

  background-color: ${(props) => (props.type === "other" ? "#fff" : "#5C9DFF")};
  color: ${(props) => (props.type === "other" ? "#000" : "#fff")};

  padding: 15px;
  border-radius: 15px;
`;
const ChatDiv = styled.span`
  text-align: left;
`;
const ChatITemContainer = styled.div<DescriptionProp>`
  text-align: ${(prop) => (prop.type === "other" ? "left" : "right")};
`;

// const Item = () => {};
const ChatItem = ({ type, children }: ChatItemType) => {
  // type == "other" ? <img></img> : <div></div>;
  return (
    <ChatITemContainer type={type}>
      <ChatDiv>
        {type === "other" && <img src="" />}
        <Description type={type}>{children}</Description>
      </ChatDiv>
    </ChatITemContainer>
  );
};
export default ChatItem;
