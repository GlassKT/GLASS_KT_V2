import styled from "styled-components";
import RightBack from "../../assets/images/rightBack.png";
import Back from "../../assets/images/background.png";
const IndexStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${Back});
  overflow: hidden;
`;
const LeftContant = styled.div`
  position: absolute;
  padding-top: 190px;

  li {
    list-style: none;
    width: 580px;
    height: 240px;
    left: 303px;
    top: 310px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 68px;
    line-height: 120px;
    /* or 176% */

    letter-spacing: -0.02em;

    color: #000000;
  }
`;
const LeftLinkContainer = styled.div`
  position: absolute;
  width: 480px;
  height: 311px;
`;

const LeftNewFrend = styled.div`
  position: absolute;
  width: 480px;
  height: 31vh;

  margin-top: 33.5%;
  margin-left: 23.8vh;

  padding-top: 70px;
  padding-left: 70px;

  background: url(${RightBack});
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  letter-spacing: -0.02em;
  white-space: pre-wrap;
`;
const RightContant = styled.div`
  position: absolute;
  width: 960px;
  height: 69vh;
  left: 960px;
  top: 0px;
`;

const RightLinkContaner = styled.div`
  position: absolute;
  display: flex;
  width: 960px;
  height: 31vh;
  background: #ffffff;
  font-family: "Noto Sans KR";
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;
const Blackarrow = styled.div`
  position: absolute;
  width: 100px;
  height: 7px;
  padding-left: 5px;
  img {
    width: 100%;
  }
`;
const Whitearrow = styled.div`
  position: absolute;
  width: 100px;
  height: 7px;
  padding-left: 5px;
  img {
    width: 100%;
  }
`;

const RightChat = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  padding-top: 70px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: -0.02em;
  color: #000000;
  white-space: pre-wrap;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;
const RightImage = styled.div`
  background: url(${RightBack});
  background-position: top right;
  width: 100%;
  height: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  img {
    width: 100%;
  }
  overflow: hidden;
`;
const Rightprofile = styled.div`
  width: 480px;
  height: 100%;
  display: flex;
  padding-top: 70px;
  padding-left: 20px;
  font-weight: 400;
  font-size: 28px;
  /* or 171% */

  letter-spacing: -0.02em;

  color: #000000;
  white-space: pre-wrap;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;
const Contant = styled.div`
  position: absolute;
  padding-left: 250px;
`;
const Label = styled.label``;
export {
  LeftContant,
  IndexStyle,
  RightContant,
  Contant,
  LeftLinkContainer,
  RightLinkContaner,
  RightChat,
  Rightprofile,
  Label,
  Whitearrow,
  RightImage,
  Blackarrow,
  LeftNewFrend,
};
