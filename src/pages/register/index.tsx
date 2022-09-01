import React from "react";
import RegisterFrom from "../../components/register";
import Left from "../../components/common/left";
import { RegisterStyle, RightImage } from "./register.style";
import right from "../../assets/images/right.png";

const Register = () => {
  return (
    <RegisterStyle>
      <Left />
      <RegisterFrom />
      <RightImage>
        <img src={right} />
      </RightImage>
    </RegisterStyle>
  );
};

export default Register;
