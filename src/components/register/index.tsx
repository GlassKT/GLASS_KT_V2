import React from "react";
import useRegister from "./hooks/useResgister";
import {
  Input,
  InputContainer,
  Register,
  RegisterButton,
  ShowToggle,
} from "./RegisterForm";
import RegisterToggle from "./registerToggle";

const RegisterFrom = () => {
  const {
    idRef,
    nameRef,
    pwRef,
    emailRef,
    registerRequest,
    changeVisibility,
    sendEmail,
  } = useRegister();

  return (
    <Register onSubmit={registerRequest}>
      <Input type="text" ref={nameRef} required />
      <InputContainer>
        <Input id="email" type="email" ref={emailRef} required />
        <RegisterToggle sendEmail={sendEmail} />
      </InputContainer>
      <Input type="text" ref={idRef} maxLength={30} required />
      <Input type="password" ref={pwRef} required />
      <ShowToggle onClick={changeVisibility}>눈</ShowToggle>
      <RegisterButton type="submit">전송</RegisterButton>
    </Register>
  );
};

export default RegisterFrom;
