import React, { useCallback, useRef } from "react";

const RegisterFrom = () => {
  const idRef = useRef<HTMLInputElement>(); // id
  const pwRef = useRef<HTMLInputElement>(); // pw
  const nameRef = useRef<HTMLInputElement>(); // name
  const emailRef = useRef<HTMLInputElement>(); // email

  const certify = useRef(false);

  const registerRequest = useCallback((e: any) => {
    e.preventDefault(); // 새로고침 막기

    if (!certify.current) {
      return;
    }

    console.log(
      idRef.current.value,
      pwRef.current.value,
      nameRef.current.value,
      emailRef.current.value
    );
  }, []);

  const sendEmail = useCallback(() => {
    console.log("이메일로 전송되었습니다");
    changeCertify();
  }, []);

  const changeCertify = useCallback(() => {
    certify.current = true;
  }, []);

  return (
    <form onSubmit={registerRequest}>
      <input type="text" ref={nameRef} required />
      <div>
        <input id="email" type="email" ref={emailRef} required />
        <label htmlFor="email" onClick={sendEmail}>
          인증
        </label>
      </div>
      <input type="text" ref={idRef} maxLength={30} required />
      <input type="password" ref={pwRef} required />
      <button type="submit">전송</button>
    </form>
  );
};

export default RegisterFrom;
