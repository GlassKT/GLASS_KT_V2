import { useCallback, useEffect, useState } from "react";
import UserApi from "../../../core/api/user/User.api";

const useModal = (refetch) => {
  const [name, setName] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");
  const [hobby, setHobby] = useState<any[]>(null);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [area, setArea] = useState("");
  const [email, setEmail] = useState("");
  const [mbti, setMbti] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const res = await UserApi.getUser();
    console.log(res);
    setName(res.name);
    setHobby([...res.Hobbys]);
    setArea(res.area);
    setId(res.id);
    setMbti(res.mbti);
    setEmail(res.email);
    setDate(res.birthday);
    setIntroduce(res.introduce);
  };

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
    setHobby([
      ...hobby,
      {
        user: localStorage.getItem("user"),
        hobby: hobbyInput,
        hobbyCol: hobby.length,
      },
    ]);
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

  const changeIntroduce = (e: any) => {
    setIntroduce(e.target.value);
  };

  const changeBirthday = (e: any) => {
    setBirthday(e.target.value);
  };

  const hobbyrequest = async () => {
    console.log("Ddd");
    const res = await UserApi.addhobby({
      user: localStorage.getItem("user"),
      hobby: hobby,
    });
  };

  const request = async () => {
    const res = await UserApi.edituser({
      id: localStorage.getItem("user"),
      name,
      email,
      mbti,
      area,
      introduce,
      birthday: date,
    });
    refetch();
  };

  return {
    name,
    hobby,
    hobbyInput,
    hobbyChange,
    changeName,
    hobbyrequest,
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
    introduce,
    birthday,
    changeMbti,
    changeIntroduce,
    changeBirthday,
  };
};

export default useModal;
