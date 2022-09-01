import styled from "styled-components";

interface ButtonType {
  color: "black" | "blue";
}

const FriendCompoent = styled.div`
  width: 325px;
  height: 154px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 325px;
  height: 154px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Image = styled.img`
  width: 74px;
  height: 74px;
  border-radius: 50%;

  border: 1px solid black;
`;

const ItemContainer = styled.div`
  width: 168px;
  height: 95px;
`;

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #000000;
  margin-bottom: 4px;
`;

const Tags = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 6px;

  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  color: #444444;
`;

const Tag = styled.li`
  list-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 168px;
  gap: 8px;
`;

const Button = styled.button<ButtonType>`
  min-width: 80px;

  height: 28px;
  background-color: ${(props) =>
    props.color === "black" ? "#000" : "#5C9DFF"};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

export {
  Image,
  Name,
  Tags,
  Tag,
  Button,
  FriendCompoent,
  ItemContainer,
  ButtonContainer,
};
