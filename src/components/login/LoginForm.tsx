import React, { useCallback, useRef } from "react";
import AuthApi from "../../core/api/Auth/Auth.api";

const LoginForm = () => {
  const idRef = useRef<HTMLInputElement>(); // id
  const pwRef = useRef<HTMLInputElement>(); // pw

  const loginRequest = useCallback((e: any) => {
    e.preventDefault(); // 새로고침 막기

    AuthApi.login({
      id: idRef.current.value,
      pw: pwRef.current.value,
    });
  }, []);

  return (
    <form onSubmit={loginRequest}>
      <input type="text" ref={idRef} maxLength={30} required />
      <input type="password" ref={pwRef} required />
      <button type="submit">전송</button>
    </form>
  );
};

export default LoginForm;
