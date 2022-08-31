import React from "react";
import { AlertContainer, Description, Title } from "./Alert";

interface AlertProps {
  children: React.ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return <AlertContainer>{children}</AlertContainer>;
};

const title = ({ children }: AlertProps) => {
  return <Title>{children}</Title>;
};
const description = ({ children }: AlertProps) => {
  return <Description>{children}</Description>;
};

Alert.title = title;
Alert.description = description;

export default Alert;
