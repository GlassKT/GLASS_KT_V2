import React, { memo } from "react";
import Alert from "../common/alert";
import Toggle from "../common/toggle/Toggle";

interface FriendProps {
  children: React.ReactNode;
}

const Friend = ({ children }: FriendProps) => {
  return (
    <div>
      <img src="" alt="" />
      <div className="name">박성한</div>
      <div className="tags">
        <div className="tag">#볼링</div>
        <div className="tag">#축구</div>
        <div className="tag">#코딩</div>
      </div>
      {children}
    </div>
  );
};

const FriendRequest = memo(() => {
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>거절</Alert.title>
            <Alert.description>
              OO님의 친구요청이 거절되었습니다.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>확인</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>거절</Toggle.Trigger>
      </Toggle>
      <Toggle>
        <Toggle.OnTime>
          <Alert.title>수락</Alert.title>
          <Alert.description>
            OO님의 친구요청이 수락되었습니다.
          </Alert.description>
          <Toggle.Off>
            <Alert.Off>확인</Alert.Off>
          </Toggle.Off>
        </Toggle.OnTime>
        <Toggle.Trigger>수락</Toggle.Trigger>
      </Toggle>
    </>
  );
});

const FriendList = memo(() => {
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>삭제</Alert.title>
            <Alert.description>
              OO님이 친구목록에서 삭제되었습니다.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>확인</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>삭제</Toggle.Trigger>
      </Toggle>
      <button>1:1 채팅</button>
    </>
  );
});

const FriendBlock = memo(() => {
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>차단 해제</Alert.title>
            <Alert.description>
              OO님이 차단 목록에서 삭제되었습니다.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>확인</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>차단 해제</Toggle.Trigger>
      </Toggle>
    </>
  );
});

Friend.FriendRequest = FriendRequest;
Friend.FriendList = FriendList;
Friend.FriendBlock = FriendBlock;

export default Friend;
