import React from "react";
import { ChatContainer } from "./Talk";

interface ProviderType {
  children?: React.ReactNode;
}

const TalkProvider = ({ children }: ProviderType) => {
  return <ChatContainer>{children}</ChatContainer>;
};

export default TalkProvider;
