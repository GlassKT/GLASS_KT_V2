import React, { memo } from "react";
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
  overflow-wrap: break-word;

  background-color: ${(props) => (props.type === "other" ? "#fff" : "#5C9DFF")};
  color: ${(props) => (props.type === "other" ? "#000" : "#fff")};

  padding: 15px;
  border-radius: 15px;

  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
`;

const ChatITemContainer = styled.div<DescriptionProp>`
  display: flex;
  justify-content: ${(prop) =>
    prop.type === "other" ? "flex-start" : "flex-end"};
  gap: 10px;

  margin-bottom: 6px;
`;

const ChatImage = styled.img`
  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

const ChatItem = memo(({ type, children }: ChatItemType) => {
  // type == "other" ? <img></img> : <div></div>;
  return (
    <ChatITemContainer type={type}>
      {type === "other" && <ChatImage src="" />}
      <Description type={type}>{children}</Description>
    </ChatITemContainer>
  );
});
export default ChatItem;
