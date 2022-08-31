import React from "react";
import useLogin from "./hooks/useLogin";
import {
  Input,
  Login,
  LoginRequest,
  IdInputContainer,
  Label,
  PasswordInputContainer,
} from "./LoginForm";

const LoginForm = (): JSX.Element => {
  const { loginRequest, idRef, pwRef } = useLogin();

  return (
    <Login onSubmit={loginRequest}>
      <h1>GlassKT</h1>
      <IdInputContainer>
        <Label htmlFor="id">아이디</Label>
        <Input id="id" type="text" ref={idRef} maxLength={30} required />
      </IdInputContainer>
      <IdInputContainer>
        <Label htmlFor="pass">비밀번호</Label>
        <Input id="pass" type="password" ref={pwRef} required />
        <LoginRequest type="submit">로그인</LoginRequest>
      </IdInputContainer>
    </Login>
  );
};

export default LoginForm;
