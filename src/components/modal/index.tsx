import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  ImageContainer,
  DescriptionContainer,
  DesTextArea,
} from "./Modal";
import test from "../../assets/images/test.png";

interface ModalProps {
  refetch?: any;
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
  hobbyrequest: () => void;
  id: string;
  changeDate: (e: any) => void;
  date: (string | number | readonly string[]) & string;
  area: string;
  changeArea: (e: any) => void;
  email: string;
  changeEmail: (e: any) => void;
  mbti: string;
  changeMbti: (e: any) => void;
  introduce: string;
  changeIntroduce: (e: any) => void;
  birthday: any;
  changeBirthday: (e: any) => void;
}

const ModalContext = createContext<ModalContextType>({
  name: null,
  hobby: [],
  hobbyChange: null,
  hobbyInput: null,
  nameChange: null,
  changeHobbyInput: null,
  request: null,
  hobbyrequest: null,
  id: null,
  changeDate: null,
  date: null,
  area: null,
  changeArea: null,
  email: null,
  changeEmail: null,
  mbti: null,
  changeMbti: null,
  introduce: null,
  changeIntroduce: null,
  birthday: null,
  changeBirthday: null,
});

const Modal = ({ refetch, children }: ModalProps) => {
  const {
    name,
    hobby,
    hobbyInput,
    hobbyChange,
    changeName,
    changeHobbyInput,
    request,
    id,
    changeDate,
    date,
    area,
    changeArea,
    email,
    changeEmail,
    mbti,
    changeMbti,
    introduce,
    changeIntroduce,
    birthday,
    hobbyrequest,
    changeBirthday,
  } = useModal(refetch);

  const value: ModalContextType = useMemo(
    () => ({
      name: name,
      hobby: hobby,
      hobbyInput: hobbyInput,
      hobbyChange: hobbyChange,
      nameChange: changeName,
      changeHobbyInput: changeHobbyInput,
      request: request,
      id,
      changeDate,
      date,
      area,
      hobbyrequest: hobbyrequest,
      changeArea,
      email,
      changeEmail,
      mbti,
      changeMbti,
      introduce,
      changeIntroduce,
      birthday,
      changeBirthday,
    }),
    [
      name,
      hobby,
      hobbyInput,
      changeName,
      hobbyChange,
      changeHobbyInput,
      request,
      id,
      changeDate,
      date,
      area,
      changeArea,
      email,
      changeEmail,
      mbti,
      changeMbti,
      introduce,
      changeIntroduce,
      birthday,
      changeBirthday,
    ]
  );

  return (
    <ModalContext.Provider value={value}>
      <ModalContainer>{children}</ModalContainer>
    </ModalContext.Provider>
  );
};

/**
 * ### 이미지 수정
 * 서버 response -> image url
 * 서버 request ->  formData
 *
 * ### 작동 방식
 * - image 클릭시 input file click()
 * - \<input type="file" ref={imageRef} />
 * - 이미지 변경 시 서버 요청
 */

const Images = () => {
  const [fileImage, setFileImage] = useState("");
  const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div>
        <input
          name="imggeUpload"
          type="file"
          accept="image/*"
          onChange={saveFileImage}
          id="Imginput"
          hidden
        />
        <Label htmlFor="Imginput">
          {/*<Image src={test}></Image>*/}
          <div>{fileImage && <Image alt="sample" src={fileImage} />}</div>
          <div>{!fileImage && <Image alt="sample" src={test} />}</div>
        </Label>
      </div>
    </>
  );
};
const ImageClick = () => {};
const Description = () => {
  const { introduce, changeIntroduce } = useContext(ModalContext);
  return (
    <DescriptionContainer>
      <DesTextArea
        spellCheck="false"
        value={introduce}
        onChange={changeIntroduce}
      ></DesTextArea>
    </DescriptionContainer>
  );
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

const Id = memo(() => {
  const { id } = useContext(ModalContext);
  return (
    <NameContainer>
      <Label>아이디</Label>
      <InputName type="text" value={id} onChange={() => {}} readOnly />
    </NameContainer>
  );
});

const Hobby = memo(() => {
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby } =
    useContext(ModalContext);

  useEffect(() => {
    console.log("hobby");
    console.log(hobby);
  }, [hobby]);

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
        {hobby?.map((v: any) => (
          <HobbyItem>#{v.hobby}</HobbyItem>
        ))}
      </HobbyItemContainer>
    </HobbyContainer>
  );
});

const Birth = () => {
  const { date, changeDate } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>생일</Label>
      <InputName type="date" value={date} onChange={changeDate} />
    </NameContainer>
  );
};

const Area = () => {
  const { area, changeArea } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>지역</Label>
      <InputName type="text" value={area} onChange={changeArea} />
    </NameContainer>
  );
};

const Email = () => {
  const { email, changeEmail } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>이메일</Label>
      <InputName type="email" value={email} onChange={changeEmail} readOnly />
    </NameContainer>
  );
};

const MBTI = () => {
  const { mbti, changeMbti } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>MBTI</Label>
      <InputName type="text" value={mbti} onChange={changeMbti} />
    </NameContainer>
  );
};

const Request = memo(({ children }: ModalProps) => {
  const { request, hobbyrequest } = useContext(ModalContext);

  hobbyrequest();

  return <RequestButton onClick={hobbyrequest}>{children}</RequestButton>;
});

Modal.Name = Name;
Modal.Hobby = Hobby;
Modal.Request = Request;
Modal.Images = Images;
Modal.Description = Description;
Modal.Id = Id;
Modal.Birth = Birth;
Modal.Area = Area;
Modal.Email = Email;
Modal.MBTI = MBTI;

export default Modal;
