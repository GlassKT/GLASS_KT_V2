import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { ModalContextType } from "./modal.type";

const ModalContext = createContext<ModalContextType>({
  name: null,
  hobby: [],
  hobbyChange: null,
  hobbyInput: null,
  nameChange: null,
  changeHobbyInput: null,
});

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");
  const [hobby, setHobby] = useState([]);

  const hobbyChange = useCallback(() => {
    setHobby([...hobby, hobbyInput]);
    setHobbyInput("");
  }, [hobby, hobbyInput]);

  const changeName = useCallback(
    (e: any) => {
      setName(e.target.value);
    },
    [name]
  );
  const changeHobbyInput = useCallback(
    (e: any) => {
      setHobbyInput(e.target.value);
    },
    [hobbyInput]
  );

  const value: ModalContextType = useMemo(
    () => ({
      name: name,
      nameChange: changeName,
      hobby: hobby,
      hobbyChange,
      hobbyInput: hobbyInput,
      changeHobbyInput: changeHobbyInput,
    }),
    [name, hobby, hobbyInput, changeName, hobbyChange, changeHobbyInput]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

const Name = () => {
  const { name, nameChange } = useContext(ModalContext);
  return (
    <div>
      <input type="text" value={name} onChange={nameChange} />
    </div>
  );
};

const Hobby = () => {
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby } =
    useContext(ModalContext);
  return (
    <div>
      <input type="text" value={hobbyInput} onChange={changeHobbyInput} />
      <button onClick={hobbyChange}>추가</button>
      {hobby.map((v) => (
        <div>{v}</div>
      ))}
    </div>
  );
};

const Off = ({ children }: any) => {
  return <div>{children}</div>;
};

Modal.Name = Name;
Modal.Hobby = Hobby;
Modal.Off = Off;
export default Modal;
