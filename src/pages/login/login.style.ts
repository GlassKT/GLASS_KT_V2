import styled from "styled-components";
import Back from "../../assets/images/background.png";

const LoginStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${Back});

  padding-left: 355px;

  h1 {
    text-align: center;
  }
`;

export default LoginStyle;
