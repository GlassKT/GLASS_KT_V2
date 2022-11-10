import React, {
  createContext,
  memo,
  useCallback,
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
  saveFileImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hobbyInput: string;
  hobbyChange: () => void;
  changeHobbyInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  request: () => void;
  hobbyrequest: () => void;
  id: string;
  imagereqest: () => void;
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
  fileImage: any;
  onSumbit: () => void;
  hobbyDelect: () => void;
  imageRef: any;
}

const ModalContext = createContext<ModalContextType>({
  name: null,
  hobby: [],
  imageRef: null,
  saveFileImage: null,
  hobbyChange: null,
  hobbyInput: null,
  hobbyDelect: null,
  nameChange: null,
  changeHobbyInput: null,
  request: null,
  hobbyrequest: null,
  id: null,
  changeDate: null,
  date: null,
  area: null,
  imagereqest: null,
  onSumbit: null,
  changeArea: null,
  email: null,
  changeEmail: null,
  mbti: null,
  changeMbti: null,
  introduce: null,
  changeIntroduce: null,
  birthday: null,
  changeBirthday: null,
  fileImage: null,
});

const Modal = ({ refetch, children }: ModalProps) => {
  const {
    name,
    hobby,
    hobbyInput,
    hobbyChange,
    changeName,
    changeHobbyInput,
    fileImage,
    request,
    id,
    changeDate,
    date,
    area,
    changeArea,
    email,
    onSumbit,
    changeEmail,
    mbti,
    changeMbti,
    introduce,
    changeIntroduce,
    birthday,
    hobbyrequest,
    changeBirthday,
    imagereqest,
    saveFileImage,
    hobbyDelect,
    imageRef,
  } = useModal(refetch);

  const value: ModalContextType = useMemo(
    () => ({
      name: name,
      imagereqest: imagereqest,
      hobby: hobby,
      hobbyInput: hobbyInput,
      hobbyChange: hobbyChange,
      nameChange: changeName,
      changeHobbyInput: changeHobbyInput,
      request: request,
      id,
      saveFileImage: saveFileImage,
      changeDate,
      date,
      imageRef,
      hobbyDelect: hobbyDelect,
      area,
      onSumbit: onSumbit,
      fileImage: fileImage,
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
      saveFileImage,
      id,
      hobbyrequest,
      changeDate,
      date,
      area,
      changeArea,
      hobbyDelect,
      imagereqest,
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
  const { saveFileImage, onSumbit, fileImage, imageRef } =
    useContext(ModalContext);
  return (
    <form encType="form-data" onSubmit={onSumbit}>
      <div>
        <input
          name="imggeUpload"
          type="file"
          accept="image/*"
          onChange={saveFileImage}
          id="Imginput"
          ref={imageRef}
          hidden
        />
        <Label htmlFor="Imginput">
          {/*<Image src={test}></Image>*/}
          <div>{fileImage && <Image alt="sample" src={fileImage} />}</div>
          <div>{!fileImage && <Image alt="sample" src={test} />}</div>
        </Label>
      </div>
    </form>
  );
};

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
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby, hobbyDelect } =
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
        {hobby?.map((v: any) => (
          <>
            <Label htmlFor="hobbyItem" onClick={hobbyDelect}></Label>
            <HobbyItem id="hobbyItem" onClick={hobbyDelect}>
              #{v?.hobby}
            </HobbyItem>
          </>
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
  const { request, hobbyrequest, imagereqest } = useContext(ModalContext);
  const requests = useCallback(() => {
    request();
    hobbyrequest();
    imagereqest();
  }, []);
  return (
    <RequestButton type="submit" onClick={imagereqest}>
      {children}
    </RequestButton>
  );
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
Modal.ModalContext = ModalContext;
export default Modal;
