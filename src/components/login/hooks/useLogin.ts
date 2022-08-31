import { useCallback, useRef } from "react";
import AuthApi from "../../../core/api/Auth/Auth.api";

const useLogin = () => {
  const idRef = useRef<HTMLInputElement>(null); // id
  const pwRef = useRef<HTMLInputElement>(null); // pw

  const loginRequest = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 막기

    AuthApi.login({
      id: idRef.current.value,
      pw: pwRef.current.value,
    });
  }, []);

  return { idRef, pwRef, loginRequest };
};

export default useLogin;
