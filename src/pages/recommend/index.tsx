import React from "react";
import Left from "../../components/common/left";
import Navigator from "../../components/common/navigator";
import { RecommendContainer } from "./Recommend";

const Recommend = () => {
  return (
    <RecommendContainer>
      <Left />
      <Navigator />
    </RecommendContainer>
  );
};

export default Recommend;
