import React, { createContext, memo, useContext, useMemo } from "react";
import Alert from "../common/alert";
import Toggle from "../common/toggle/Toggle";
import {
  Image,
  Name,
  Tags,
  Tag,
  Button,
  FriendCompoent,
  ItemContainer,
  ButtonContainer,
} from "./Friend";
import useFriend from "./hooks/useFriend";

interface ButtonProps {
  children: React.ReactNode;
  func: () => void;
}

interface FriendProps {
  children: React.ReactNode;
}

interface FriendType {
  id: number;
  name: string;
  hobby: string[];
}

interface FriendFuncType {
  func: {
    accept: () => void;
    remove: () => void;
    refuse: () => void;
    chat: () => void;
    block: () => void;
  };
}

interface FriendItemProps extends FriendProps {
  item: FriendType;
}

const FriendContext = createContext<FriendType & FriendFuncType>({
  id: null,
  name: null,
  hobby: [],
  func: null,
});

const FriendContainer = memo(({ item, children }: FriendItemProps) => {
  const func = useFriend(item.id);
  const value: any = useMemo(
    () => ({
      id: item.id,
      name: item.name,
      hobby: item.hobby,
      func: func,
    }),
    [item, func]
  );

  return (
    <FriendContext.Provider value={value}>
      <FriendCompoent>{children}</FriendCompoent>
    </FriendContext.Provider>
  );
});

const Friend = ({ item, children }: FriendItemProps) => {
  return (
    <Friend.FriendContainer item={item}>
      <Image src="" alt="" />
      <ItemContainer>
        <Name>{item.name}</Name>
        <Tags className="tags">
          {item.hobby.map((v) => (
            <Tag className="tag" key={v}>
              {v}
            </Tag>
          ))}
        </Tags>
        <ButtonContainer>{children}</ButtonContainer>
      </ItemContainer>
    </Friend.FriendContainer>
  );
};

const FriendRequest = memo(() => {
  const { func, name } = useContext(FriendContext);

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
        <Toggle.Trigger>
          <Refuse func={func.refuse}>거절</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>수락</Alert.title>
            <Alert.description>
              {name}님의 친구요청이 수락되었습니다.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>확인</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Accept func={func.accept}>수락</Accept>
        </Toggle.Trigger>
      </Toggle>
    </>
  );
});

const FriendList = memo(() => {
  const { func, name } = useContext(FriendContext);
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
        <Toggle.Trigger>
          <Refuse func={func.refuse}>삭제</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Accept func={func.chat}>1:1 채팅</Accept>
    </>
  );
});

const FriendRecommend = memo(() => {
  const { func, name } = useContext(FriendContext);
  return (
    <>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>차단</Alert.title>
            <Alert.description>
              {name}님이 친구목록에서 차단되었습니다.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>확인</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Refuse func={func.remove}>차단</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Accept func={func.chat}>1:1 채팅</Accept>
    </>
  );
});

const FriendBlock = memo(() => {
  const { func, name } = useContext(FriendContext);
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
        <Toggle.Trigger>
          <Accept func={func.block}>차단 해제</Accept>
        </Toggle.Trigger>
      </Toggle>
    </>
  );
});

Friend.FriendContainer = FriendContainer;
Friend.FriendRequest = FriendRequest;
Friend.FriendList = FriendList;
Friend.FriendBlock = FriendBlock;
Friend.FriendRecommend = FriendRecommend;

export default Friend;

const Refuse = ({ children, func }: ButtonProps) => (
  <Button color="black" onClick={func}>
    {children}
  </Button>
);

const Accept = ({ children, func }: ButtonProps) => (
  <Button color="blue" onClick={func}>
    {children}
  </Button>
);
