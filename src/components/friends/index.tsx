import React, { createContext, memo, useContext, useMemo } from "react";
import Alert from "../common/alert";
import Toggle from "../common/toggle/Toggle";
import { Image, Name, Tags, Tag } from "./Friend";

interface FriendProps {
  children: React.ReactNode;
}

interface FriendType {
  name: string;
  tags: string[];
}

interface FriendItemProps extends FriendProps {
  item: FriendType;
}

const FriendContext = createContext<FriendType>({
  name: null,
  tags: [],
});

const FriendContainer = memo(({ item, children }: FriendItemProps) => {
  const value: any = {
    name: item.name,
    tags: item.tags,
  };

  return (
    <FriendContext.Provider value={value}>{children}</FriendContext.Provider>
  );
});

const Friend = ({ item, children }: FriendItemProps) => {
  return (
    <Friend.FriendContainer item={item}>
      <Image src="" alt="" />
      <Name>{item.name}</Name>
      <Tags className="tags">
        {item.tags.map((v) => (
          <Tag className="tag">{v}</Tag>
        ))}
      </Tags>
      {children}
    </Friend.FriendContainer>
  );
};

const FriendRequest = memo(() => {
  const { name } = useContext(FriendContext);
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>거절</Alert.title>
            <Alert.description>
              {name}님의 친구요청이 거절되었습니다.
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
            {name}님의 친구요청이 수락되었습니다.
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
  const { name } = useContext(FriendContext);
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>삭제</Alert.title>
            <Alert.description>
              {name}님이 친구목록에서 삭제되었습니다.
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
  const { name } = useContext(FriendContext);
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>차단 해제</Alert.title>
            <Alert.description>
              {name}님이 차단 목록에서 삭제되었습니다.
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

Friend.FriendContainer = FriendContainer;
Friend.FriendRequest = FriendRequest;
Friend.FriendList = FriendList;
Friend.FriendBlock = FriendBlock;

export default Friend;
