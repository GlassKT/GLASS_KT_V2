import React from "react";
import { AlertContainer, Button, Description, Title } from "./Alert";

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
const Off = ({ children }: AlertProps) => {
  return <Button>{children}</Button>;
};

Alert.title = title;
Alert.description = description;
Alert.Off = Off;

export default Alert;
