import React from "react";
import {
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
} from "./index.style";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import { Link } from "react-router-dom";
import right from "../../assets/images/right.png";
import black from "../../assets/images/blackarrow.png";
import white from "../../assets/images/witearrow.png";
const index = () => {
  return (
    <IndexStyle>
      <Left />
      <Contant>
        <Navigator />
        <LeftContant>
          <li>취미가 같은 친구를 만나보세요</li>
          <LeftLinkContainer>
            <Link
              to={"../recomand"}
              style={{ textDecoration: "none", color: "black" }}
            ></Link>
          </LeftLinkContainer>
          <LeftNewFrend>
            <Label htmlFor="witearrow">
              새로운 추천 친구를{"\n"} 만나 보세요
            </Label>
            <Whitearrow>
              <img src={white} />
            </Whitearrow>
          </LeftNewFrend>
        </LeftContant>
        <RightContant>
          <RightImage>
            <img src={right} />
          </RightImage>
          <RightLinkContaner>
            <RightChat>
              <Link
                to={"../chat"}
                style={{
                  width: "100%",
                  height: "40%",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Label htmlFor="textchat">
                  친구와{"\n"} 1:1 채팅을 즐겨보세요
                </Label>
                <Blackarrow>
                  <img src={black}></img>
                </Blackarrow>
              </Link>
            </RightChat>
            <Rightprofile>
              <Link
                to={"../profile"}
                style={{
                  width: "100%",
                  height: "40%",
                  textDecoration: "none",
                  color: "black",
                }}
                id="linkprofile"
              >
                <Label htmlFor="arrow">
                  프로필을 수정해 {"\n"}내 취미를 등록해보세요
                </Label>
                <Blackarrow>
                  <img src={black}></img>
                </Blackarrow>
              </Link>
            </Rightprofile>
          </RightLinkContaner>
        </RightContant>
      </Contant>
    </IndexStyle>
  );
};

export default index;
