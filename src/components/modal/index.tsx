import React, { createContext, memo, useContext, useMemo } from "react";
import useModal from "./hooks/useModal";
import {
  HobbyContainer,
  InputName,
  HobbyAdd,
  HobbyItemContainer,
  RequestButton,
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
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const Name = memo(() => {
  const { name, nameChange } = useContext(ModalContext);
  return <InputName type="text" value={name} onChange={nameChange} />;
});

const Hobby = memo(() => {
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby } =
    useContext(ModalContext);
  return (
    <HobbyContainer>
      <InputName type="text" value={hobbyInput} onChange={changeHobbyInput} />
      <HobbyAdd onClick={hobbyChange}>추가</HobbyAdd>
      {hobby.map((v) => (
        <HobbyItemContainer item={v}></HobbyItemContainer>
      ))}
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
export default Modal;
