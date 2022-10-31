import React from "react";
import { ChatContainer } from "./Talk";

interface ProviderType {
  children?: React.ReactNode;
}

const TalkProvider = ({ children }: ProviderType) => {
  return <ChatContainer>{children}</ChatContainer>;
};

const Me = () => {};

const You = () => {};

const Input = () => {};

TalkProvider.Me = Me;
TalkProvider.You = You;
TalkProvider.Input = Input;

export default TalkProvider;
