import React, { createContext, memo, useContext, useMemo } from "react";
import useModal from "./hooks/useModal";
import {
  HobbyContainer,
  InputName,
  InputHobby,
  HobbyAdd,
  HobbyItemContainer,
  RequestButton,
  ModalContainer,
  Image,
  NameContainer,
  Label,
  Flex,
  HobbyItem,
} from "./Modal";

interface ModalProps {
  children: React.ReactNode;
}

interface ModalContextType {
  name: string;
  nameChange: any;
  hobby: string[];
  hobbyInput: string;
  hobbyChange: () => void;
  changeHobbyInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  request: () => void;
}

const ModalContext = createContext<ModalContextType>({
  name: null,
  hobby: [],
  hobbyChange: null,
  hobbyInput: null,
  nameChange: null,
  changeHobbyInput: null,
  request: null,
});

const Modal = ({ children }: ModalProps) => {
  const {
    name,
    hobby,
    hobbyInput,
    hobbyChange,
    changeName,
    changeHobbyInput,
    request,
  } = useModal();

  const value: ModalContextType = useMemo(
    () => ({
      name: name,
      hobby: hobby,
      hobbyInput: hobbyInput,
      hobbyChange,
      nameChange: changeName,
      changeHobbyInput: changeHobbyInput,
      request: request,
    }),
    [
      name,
      hobby,
      hobbyInput,
      changeName,
      hobbyChange,
      changeHobbyInput,
      request,
    ]
  );

  return (
    <ModalContext.Provider value={value}>
      <ModalContainer>{children}</ModalContainer>
    </ModalContext.Provider>
  );
};

const Images = () => {
  return <Image />;
};

const Name = memo(() => {
  const { name, nameChange } = useContext(ModalContext);
  return (
    <NameContainer>
      <Label>이름</Label>
      <InputName type="text" value={name} onChange={nameChange} />
    </NameContainer>
  );
});

const Hobby = memo(() => {
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby } =
    useContext(ModalContext);
  return (
    <HobbyContainer>
      <NameContainer>
        <Label>취미</Label>
        <Flex>
          <InputHobby
            type="text"
            value={hobbyInput}
            onChange={changeHobbyInput}
          />
          <HobbyAdd onClick={hobbyChange}>추가</HobbyAdd>
        </Flex>
      </NameContainer>
      <HobbyItemContainer>
        {hobby.map((v) => (
          <HobbyItem>{v}</HobbyItem>
        ))}
      </HobbyItemContainer>
    </HobbyContainer>
  );
});

const Request = memo(({ children }: ModalProps) => {
  const { request } = useContext(ModalContext);
  return <RequestButton onClick={request}>{children}</RequestButton>;
});

Modal.Name = Name;
Modal.Hobby = Hobby;
Modal.Request = Request;
Modal.Images = Images;
export default Modal;
