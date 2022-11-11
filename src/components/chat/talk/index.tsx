import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { io, Socket } from "socket.io-client";
import styled from "styled-components";
import FriendsApi from "../../../core/api/friends/Friends.api";
import ChatInput from "../chatInput/ChatInput";
import ChatItem from "../chatitem/chatitem";
import FriendBar from "../FriendBar";
import { ChatContainer } from "./Talk";

const ChatMain = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  padding: 48px;

  overflow-y: scroll;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface MessageType {
  type: "me" | "other";
  description: string;
}

const  TalkProvider = () => {
  const [messageList, setMessageList] = useState<any[]>([]);
  const changeList = (message: string) => {
    /**
     * num_room: location.pathname.split("/")[2],
      content: messageList[messageList.length - 1].description,
      user_id: localStorage.getItem("user"),
      createat: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      name: localStorage.getItem("name"),
     */
    const now = new Date();
    setMessageList([
      ...messageList,
      {
        num_room: location.pathname.split("/")[2],
        content: message,
        user_id: localStorage.getItem("user"),
        createat: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
        name: localStorage.getItem("name"),
      },
    ]);
  };

  // const { me } = useSelector((state: any) => state.chatReducer);

  const location = useLocation();
  let socket: Socket = io("http://192.168.0.44:7070", {
    path: "/socket.io",
    transports: ["websocket"],
  });

  const getChatHistory = async () => {
    const res = await FriendsApi.chattinghisyory(
      location.pathname.split("/")[2]
    );
    console.log(res.data);
    setMessageList(res.data.reverse());

    socket.emit("joinroom", location.pathname.split("/")[2]);
    socket.on("msg", (data) => {
      if (typeof data !== "string") {
        setMessageList((prev) => prev.concat(data));
      }
    });
  };

  useEffect(() => {
    getChatHistory();
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [location]);

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messageList]);

  const scrollRef = useRef<any>();

  return (
    <ChatContainer>
      <FriendBar />
      <div>
        <ChatMain id="main" ref={scrollRef}>
          {messageList?.map((v) => (
            <ChatItem v={v}>{v.content}</ChatItem>
          ))}
        </ChatMain>
        <ChatInput
          socket={socket}
          changeList={changeList}
          messageList={messageList}
        />
      </div>
    </ChatContainer>
  );
};

export default TalkProvider;
