import React from "react";
import styled from "styled-components";

interface ButtonType {
  color: "black" | "blue";
}
interface ButtonProps {
  children: React.ReactNode;
  func: () => void;
}

const Image = styled.img``;

const Name = styled.div``;

const Tags = styled.div``;

const Tag = styled.div``;

const Button = styled.button<ButtonType>``;

const Refuse = ({ children, func }: ButtonProps) => (
  <Button color="black" onClick={func}>
    {children}
  </Button>
);

const Accept = ({ children, func }: ButtonProps) => (
  <Button color="blue" onClick={func}>
    {children}
  </Button>
);

export { Image, Name, Tags, Tag, Refuse, Accept };
