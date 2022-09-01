import styled from "styled-components";
import LeftImage from "../../../assets/images/left.png";

const LeftContainer = styled.div`
  background: linear-gradient(
    108.74deg,
    rgba(255, 255, 255, 0.16) 20%,
    rgba(255, 255, 255, 0.04) 100%
  );
  background: url(${LeftImage});
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 50px -25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(20px);

  /* mix-blend-mode: overlay; */

  width: 150px;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  p {
    font-size: 40px;
    line-height: 54px;

    color: #000000;

    position: absolute;
    bottom: 82px;
    left: 8px;
    transform: rotate(-90deg);
  }
`;

export { LeftContainer };
