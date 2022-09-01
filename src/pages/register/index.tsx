import React from "react";
import Left from "../../components/common/left";
import RegisterFrom from "../../components/register";
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
