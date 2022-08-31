import React from "react";
import useLogin from "./hooks/useLogin";
import { InputId, InputPw, Login, LoginRequest } from "./LoginForm";

const LoginForm = (): JSX.Element => {
  const { loginRequest, idRef, pwRef } = useLogin();

  return (
    <Login onSubmit={loginRequest}>
      <InputId type="text" ref={idRef} maxLength={30} required />
      <InputPw type="password" ref={pwRef} required />
      <LoginRequest type="submit">전송</LoginRequest>
    </Login>
  );
};

export default LoginForm;
