import { useCallback, useState } from "react";

const useModal = () => {
  const [name, setName] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");
  const [hobby, setHobby] = useState([]);

  const hobbyChange = useCallback(() => {
    setHobby([...hobby, hobbyInput]);
    setHobbyInput("");
  }, [hobby, hobbyInput]);

  const changeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    },
    [name]
  );
  const changeHobbyInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setHobbyInput(e.target.value);
    },
    [hobbyInput]
  );

  const request = () => {};

  return {
    name,
    hobby,
    hobbyInput,
    hobbyChange,
    changeName,
    changeHobbyInput,
    request,
  };
};

export default useModal;
