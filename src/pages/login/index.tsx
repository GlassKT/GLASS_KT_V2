import React from "react";
import LoginForm from "../../components/login";
import LoginStyle from "./login.style";
import Left from "../../components/common/left";
import { RightImage } from "../register/register.style";
import right from "../../assets/images/right.png";

const Login = () => {
  return (
    <LoginStyle>
      <Left />
      <LoginForm />
      <RightImage>
        <img src={right} />
      </RightImage>
    </LoginStyle>
  );
};

export default Login;
