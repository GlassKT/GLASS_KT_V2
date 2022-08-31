import React from "react";
import useRegister from "./hooks/useResgister";
import {
  Input,
  Label,
  Register,
  RegisterButton,
  ShowToggle,
  InputLabel,
  Flex,
  Show,
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
      <InputLabel>
        <Label htmlFor="email">이메일</Label>
        <Flex>
          <Input id="email" type="email" ref={emailRef} required />
          <RegisterToggle sendEmail={sendEmail} />
        </Flex>
      </InputLabel>
      <InputLabel>
        <Label htmlFor="name">이름</Label>
        <Input id="name" type="text" ref={nameRef} required />
      </InputLabel>
      <InputLabel>
        <Label htmlFor="id">아이디</Label>
        <Input type="text" id="id" ref={idRef} maxLength={30} required />
      </InputLabel>
      <InputLabel>
        <Label htmlFor="pw">비밀번호</Label>
        <Flex id="relative">
          <Input type="password" id="pw" ref={pwRef} required />
          <Show>
            <ShowToggle onClick={changeVisibility}>눈</ShowToggle>
          </Show>
        </Flex>
      </InputLabel>
      <InputLabel>
        <Label htmlFor="pw2">비밀번호 확인</Label>
        <Input type="password" id="pw2" required />
      </InputLabel>
      <RegisterButton type="submit">전송</RegisterButton>
    </Register>
  );
};

export default RegisterFrom;
