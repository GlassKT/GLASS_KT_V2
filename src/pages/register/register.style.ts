import styled from "styled-components";
import Back from "../../assets/images/background.png";
import RightBack from "../../assets/images/rightBack.png";

const RegisterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  background: url(${Back});

  padding-left: 355px;

  height: 100vh;
`;

const RightImage = styled.div`
  background: url(${RightBack});
  width: 960px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
  overflow: hidden;
`;

export { RegisterStyle, RightImage };
