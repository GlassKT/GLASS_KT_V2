import React from "react";
import styled from "styled-components";

const FriendBarContainer = styled.div`
  width: 300px;
  height: 880px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const Me = styled.div`
  img {
    width: 88px;
    height: 88px;
  }
  width: 88px;
  height: 191px;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;

  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  letter-spacing: -0.02em;
  color: #000000;
`;

const SearchBar = styled.input`
  height: 52px;
  width: 300px;

  border: none;
  outline: none;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  padding-left: 20px;
  margin-bottom: 18px;
`;

const FriendList = styled.div`
  width: 300px;
  height: 618px;

  overflow-y: scroll;
`;

const FriendBar = () => {
  return (
    <FriendBarContainer>
      <Me>
        <img src="" alt="" />
        <p>강성훈</p>
      </Me>
      <SearchBar />
      <FriendList>
        <Friend info="FALSE" />
        <Friend info="TRUE" />
        <Friend info="FALSE" />
        <Friend info="FALSE" />
        <Friend info="FALSE" />
      </FriendList>
    </FriendBarContainer>
  );
};

const Friend = ({ info }: any) => {
  return (
    <FriendContainer type={info}>
      <img src="" alt="" />
      <div className="margin24">
        <div className="name">박성한</div>
        <div className="des">아 그렇구나</div>
      </div>
    </FriendContainer>
  );
};

interface FriendInfo {
  type: string;
}

const FriendContainer = styled.div<FriendInfo>`
  width: 300px;
  height: 82px;

  display: flex;
  align-items: center;

  background-color: ${(props) => (props.type === "TRUE" ? "#5C9DFF" : "white")};

  img {
    width: 50px;
    height: 50px;
    margin-left: 40px;
  }

  .margin24 {
    margin-left: 24px;
  }

  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    letter-spacing: -0.02em;
    color: ${(props) => (props.type === "FALSE" ? "#444444" : "white")};
  }

  .des {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;

    letter-spacing: -0.02em;
    color: ${(props) => (props.type === "FALSE" ? "#a0a0a0" : "white")};
  }
`;

export default FriendBar;
