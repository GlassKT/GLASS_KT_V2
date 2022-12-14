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
import test from "../../assets/images/test.png";

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
  const func = useFriend(item.id, item.name);
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
      <Image src={test} alt="" />
      <ItemContainer>
        <Name>{item.name}</Name>
        <Tags className="tags">
          {item.hobby &&
            item.hobby.map((v) => (
              <Tag className="tag" key={v}>
                #{v}
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
            <Alert.title>??????</Alert.title>
            <Alert.description>
              {name}?????? ??????????????? ?????????????????????.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>??????</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Refuse func={func.refuse}>??????</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Toggle>
        <Toggle.OnTime>
          <Alert>
            <Alert.title>??????</Alert.title>
            <Alert.description>
              {name}?????? ??????????????? ?????????????????????.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>??????</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Accept func={func.accept}>??????</Accept>
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
            <Alert.title>??????</Alert.title>
            <Alert.description>
              {name}?????? ?????????????????? ?????????????????????.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>??????</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Refuse func={func.refuse}>??????</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Accept func={func.chat}>1:1 ??????</Accept>
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
            <Alert.title>??????</Alert.title>
            <Alert.description>
              {name}?????? ?????????????????? ?????????????????????.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>??????</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Refuse func={func.remove}>??????</Refuse>
        </Toggle.Trigger>
      </Toggle>
      <Accept func={func.chat}>1:1 ??????</Accept>
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
            <Alert.title>?????? ??????</Alert.title>
            <Alert.description>
              {name}?????? ?????? ???????????? ?????????????????????.
            </Alert.description>
            <Toggle.Off>
              <Alert.Off>??????</Alert.Off>
            </Toggle.Off>
          </Alert>
        </Toggle.OnTime>
        <Toggle.Trigger>
          <Accept func={func.block}>?????? ??????</Accept>
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
