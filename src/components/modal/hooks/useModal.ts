import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import UserApi from "../../../core/api/user/User.api";
import { userState } from "../../../core/reducers/user/UserState";
import CustomAxios from "../../../core/util/CustomAxios";

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
  const [fileImage, setFileImage] = useState("");
  const imageRef = useRef<any>();

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
  const onSumbit = () => {};
  const changeMbti = (e: any) => {
    setMbti(e.target.value);
  };

  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };
  const hobbyDelect = () => {
    console.log(hobby);
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

  const imagereqest = async () => {
    const formData = new FormData();
    // const id = localStorage.getItem("user");
    formData.append(`image`, imageRef.current.files[0]);
    const ddd = imageRef.current.files[0];
    console.log(ddd);

    const res = await axios.post(
      `http://192.168.227.124:8080/uploadimg`,
      formData,
      {
        headers: {
          Authorization: localStorage.getItem("Authorization") || null,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("res");
    console.log(res);
  };
  const hobbyrequest = async () => {
    const hobbydata = hobby?.map((v: any) => v?.hobby);
    console.log(hobbydata);
    const res = await UserApi.addhobby({
      user: localStorage.getItem("user"),
      hobby: hobbydata,
    });
    console.log("succes");
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
    hobbyDelect,
    id,
    date,
    changeDate,
    fileImage,
    area,
    changeArea,
    email,
    changeEmail,
    mbti,
    saveFileImage,
    introduce,
    birthday,
    changeMbti,
    changeIntroduce,
    changeBirthday,
    imageRef,
    onSumbit,
    imagereqest,
  };
};

export default useModal;
