import React from "react";
import Toggle from "../toggle/Toggle";
import FriendStyle from "./friend.style";

const FriendItem = () => {
  return (
    <FriendStyle>
      <img src="" alt="" />
      <div className="name">박성한</div>
      <div className="tags">
        <div className="tag">#볼링</div>
        <div className="tag">#축구</div>
        <div className="tag">#코딩</div>
        <Toggle>
          <Toggle.On>
            <div>show</div>
          </Toggle.On>
          <Toggle.Trigger>
            <div>open</div>
          </Toggle.Trigger>
          <Toggle.Off>
            <div>close</div>
          </Toggle.Off>
        </Toggle>
      </div>
    </FriendStyle>
  );
};

export default FriendItem;
