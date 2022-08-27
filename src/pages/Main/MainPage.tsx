import React from "react";
import Main from "../../components/main/Main";
import SelfProfile from "../../components/profile/SelfProfile";
import MainStyle from "./main.style";

const MainPage = () => {
  return (
    <MainStyle>
      <Main />
      <SelfProfile />
    </MainStyle>
  );
};

export default MainPage;
