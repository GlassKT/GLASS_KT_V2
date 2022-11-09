import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import FriendsApi from "../../../core/api/friends/Friends.api";
import { CHANGE_ROOM } from "../../../core/reducers/chat/ChatAction";

const useFriend = (id: number, name) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const refuse = () => {
    FriendsApi.refuseFriend(id);
  };
  const accept = () => {
    FriendsApi.acceptFriend(id);
  };
  const remove = () => {
    console.log("remove", id);
  };
  const chat = async () => {
    const res = await FriendsApi.addChatRoom(id);
    dispatch({
      type: CHANGE_ROOM,
      data: {
        user: name,
        name: localStorage.getItem("name"),
        roomNum: res.message,
      },
    });
    navigate(`/chat/${res.message}`);
  };
  const block = () => {
    console.log("block", id);
  };

  return { refuse, accept, remove, chat, block };
};

export default useFriend;
