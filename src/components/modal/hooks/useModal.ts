import { useCallback, useState } from "react";

const useModal = () => {
  const [name, setName] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");
  const [hobby, setHobby] = useState([]);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [mbti, setMbti] = useState("");

  const changeMbti = (e: any) => {
    setMbti(e.target.value);
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const changeArea = (e: any) => {
    setArea(e.target.value);
  };

  const changeDate = (e: any) => {
    setDate(e.target.value);
  };

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
    id,
    date,
    changeDate,
    area,
    changeArea,
    email,
    changeEmail,
    mbti,
    changeMbti,
  };
};

export default useModal;
