import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { io, Socket } from "socket.io-client";
import styled from "styled-components";
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

const TalkProvider = () => {
  const [messageList, setMessageList] = useState<MessageType[]>([
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
    { type: "other", description: "selifjslejl" },
  ]);
  const changeList = (message: string) => {
    setMessageList([...messageList, { type: "me", description: message }]);
  };

  // const { me } = useSelector((state: any) => state.chatReducer);

  const location = useLocation();
  let socket: Socket = io("http://10.80.162.255:7070", {
    path: "/socket.io",
    transports: ["websocket"],
  });

  useEffect(() => {
    try {
      socket.emit("joinroom", location.pathname.split("/")[2]);
      socket.on("msg", (data) => {
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const now = new Date();
    socket.emit("msg", {
      num_room: location.pathname.split("/")[2],
      content: messageList[messageList.length - 1].description,
      user_id: localStorage.getItem("user"),
      createat: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      name: localStorage.getItem("name"),
    });
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messageList]);

  const scrollRef = useRef<any>();

  return (
    <ChatContainer>
      <FriendBar />
      <div>
        <ChatMain id="main" ref={scrollRef}>
          {messageList.map((v) => (
            <ChatItem type={v.type}>{v.description}</ChatItem>
          ))}
        </ChatMain>
        <ChatInput changeList={changeList} />
      </div>
    </ChatContainer>
  );
};

export default TalkProvider;
