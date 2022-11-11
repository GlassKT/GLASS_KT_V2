import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FriendsApi from "../../../core/api/friends/Friends.api";

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
    border-radius: 50%;
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
  // 데이터 관리
  const [memberList, setMemberList] = useState(null);

  useEffect(() => {
    getMember();
  }, []);

  const getMember = async () => {
    const res = await FriendsApi.getChatMember(localStorage.getItem("user"));
    setMemberList(res.data);
  };

  const [search, setSearch] = useState(null);

  const [timer, setTimer] = useState<NodeJS.Timeout>(null); // 디바운싱 타이머

  const onChangeInputs = async (event) => {
    setSearch(event.target.value);

    // 디바운싱 - 마지막 호출만 적용 (put api)
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(async () => {
      try {
        console.log(event.target.value);
      } catch (e) {
        console.error("error", e);
      }
    }, 400);
    setTimer(newTimer);
  };

  return (
    <FriendBarContainer>
      <Me>
        <img
          src={`http://192.168.0.44:8080/image/${localStorage.getItem(
            "image"
          )}`}
          alt=""
        />
        <p>강성훈</p>
      </Me>
      <SearchBar onChange={onChangeInputs} />
      <FriendList>
        {memberList?.map((v) => (
          <Friend info={v} />
        ))}
      </FriendList>
    </FriendBarContainer>
  );
};

const Friend = ({ info }: any) => {
  const location = useLocation();

  return (
    <Link to={`/chat/${info.roomnum}`}>
      <FriendContainer
        type={
          info.roomnum === location.pathname.split("/")[2] ? "TRUE" : "FALSE"
        }
      >
        <img
          src={`http://192.168.0.24:8080/image/${info.image}`}
          alt="이미징"
        />
        <div className="margin24">
          <div className="name">{info.name}</div>
          <div className="des">{info.message}</div>
        </div>
      </FriendContainer>
    </Link>
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

    border-radius: 50%;
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
