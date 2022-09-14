import React, { useCallback, useRef } from "react";
import AuthApi from "../../../core/api/Auth/Auth.api";

const useRegister = () => {
  const idRef = useRef<HTMLInputElement>(null); // id
  const pwRef = useRef<HTMLInputElement>(null); // pw
  const nameRef = useRef<HTMLInputElement>(null); // name
  const emailRef = useRef<HTMLInputElement>(null); // email

  const certify = useRef(false);

  const registerRequest = useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault(); // 새로고침 막기

      if (!certify.current) {
        return;
      }

      await AuthApi.register({
        id: idRef.current.value,
        pw: pwRef.current.value,
        name: nameRef.current.value,
        email: emailRef.current.value,
      });
    },
    []
  );

  const changeVisibility = useCallback(() => {
    const type = pwRef.current.type;
    pwRef.current.type = type === "password" ? "text" : "password";
  }, []);

  const sendEmail = useCallback(() => {
    AuthApi.emailSend(emailRef.current.value);
    changeCertify();
  }, [emailRef]);

  const changeCertify = useCallback(() => {
    certify.current = true;
  }, []);

  return {
    idRef,
    nameRef,
    pwRef,
    emailRef,
    registerRequest,
    changeVisibility,
    sendEmail,
  };
};

export default useRegister;
