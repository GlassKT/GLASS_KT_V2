import React, { useRef } from "react";
import styled from "styled-components";
import sending from "../../../assets/images/Sending.png";

const ChatInptContainer = styled.form`
  background: #ffffff;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  width: 724px;
  height: 82px;

  margin-left: 48px;

  display: flex;

  input {
    height: 100%;
    padding: 30px;
    width: 90%;

    outline: none;
    border: none;

    font-size: 16px;
    background: none;

    /* border: 1px solid black; */
  }

  button {
    width: 10%;
    height: 100%;
    background: none;
    border: none;

    cursor: pointer;

    background-image: url(${sending});
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
`;

const ChatInput = ({ socket, changeList, messageList }) => {
  const inputRef = useRef<HTMLInputElement>();

  const Submit = (e) => {
    e.preventDefault();
    const now = new Date();

    socket.emit("msg", {
      num_room: location.pathname.split("/")[2],
      content: inputRef.current.value,
      user_id: localStorage.getItem("user"),
      createat: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
      name: localStorage.getItem("name"),
    });

    // changeList(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <ChatInptContainer onSubmit={Submit}>
      <input type="text" placeholder="글을 입력해주세요" ref={inputRef} />
      <button></button>
    </ChatInptContainer>
  );
};

export default ChatInput;
