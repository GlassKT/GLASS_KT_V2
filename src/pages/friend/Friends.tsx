import styled from "styled-components";
import Back from "../../assets/images/background.png";

const FriendsContainer = styled.div`
  height: 100vh;
  padding-left: 250px;
  background: url(${Back});
`;

interface TitleProps {
  width: string;
}

const Title = styled.div<TitleProps>`
  margin-top: 18px;
  margin-bottom: 20px;
  height: 52px;
  width: ${(props) => props.width};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface TitleDesProps {
  color: string;
}

const TitleDes = styled.p<TitleDesProps>`
  font-weight: 400;
  font-size: 18px;
  line-height: 48px;
  /* identical to box height, or 267% */

  letter-spacing: -0.02em;

  color: ${(props) => (props.color === "true" ? "#000000" : "#a0a0a0")};
`;

const TitleText = styled.h2`
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  /* identical to box height, or 171% */

  letter-spacing: -0.02em;

  color: #000000;
`;

const ItemContainer = styled.div`
  display: flex;
  width: 1420px;
  gap: 40px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

export { FriendsContainer, Title, TitleText, TitleDes, ItemContainer };
