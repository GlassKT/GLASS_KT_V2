import React from "react";
import useLogin from "./hooks/useLogin";
import { Input, Login, LoginRequest } from "./LoginForm";

const LoginForm = (): JSX.Element => {
  const { loginRequest, idRef, pwRef } = useLogin();

  return (
    <Login onSubmit={loginRequest}>
      <Input type="text" ref={idRef} maxLength={30} required />
      <Input type="password" ref={pwRef} required />
      <LoginRequest type="submit">전송</LoginRequest>
    </Login>
  );
};

export default LoginForm;
