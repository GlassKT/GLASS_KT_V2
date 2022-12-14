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
    changeBirthday,
  } = useModal(refetch);

  const value: ModalContextType = useMemo(
    () => ({
      name: name,
      hobby: hobby,
      hobbyInput: hobbyInput,
      hobbyChange,
      nameChange: changeName,
      changeHobbyInput: changeHobbyInput,
      request: request,
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
 * ### ????????? ??????
 * ?????? response -> image url
 * ?????? request ->  formData
 *
 * ### ?????? ??????
 * - image ????????? input file click()
 * - \<input type="file" ref={imageRef} />
 * - ????????? ?????? ??? ?????? ??????
 */
const Images = () => {
  return <Image src={test} />;
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
      <Label>??????</Label>
      <InputName type="text" value={name} onChange={nameChange} />
    </NameContainer>
  );
});

const Id = memo(() => {
  const { id } = useContext(ModalContext);
  return (
    <NameContainer>
      <Label>?????????</Label>
      <InputName type="text" value={id} onChange={() => {}} readOnly />
    </NameContainer>
  );
});

const Hobby = memo(() => {
  const { hobbyInput, hobbyChange, changeHobbyInput, hobby } =
    useContext(ModalContext);
  return (
    <HobbyContainer>
      <NameContainer>
        <Label>??????</Label>
        <Flex>
          <InputHobby
            type="text"
            value={hobbyInput}
            onChange={changeHobbyInput}
          />
          <HobbyAdd onClick={hobbyChange}>??????</HobbyAdd>
        </Flex>
      </NameContainer>
      <HobbyItemContainer>
        {hobby.map((v: any) => (
          <HobbyItem>#{v?.hobby} </HobbyItem>
        ))}
      </HobbyItemContainer>
    </HobbyContainer>
  );
});

const Birth = () => {
  const { date, changeDate } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>??????</Label>
      <InputName type="date" value={date} onChange={changeDate} />
    </NameContainer>
  );
};

const Area = () => {
  const { area, changeArea } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>??????</Label>
      <InputName type="text" value={area} onChange={changeArea} />
    </NameContainer>
  );
};

const Email = () => {
  const { email, changeEmail } = useContext(ModalContext);

  return (
    <NameContainer>
      <Label>?????????</Label>
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
  const { request } = useContext(ModalContext);
  return <RequestButton onClick={request}>{children}</RequestButton>;
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
