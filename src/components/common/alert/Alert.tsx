import styled from "styled-components";

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;

  width: 350px;
  height: 180px;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.div`
  margin-top: 30px;
  margin-left: 30px;

  font-size: 25px;
`;

const Description = styled.div`
  margin-top: 10px;
  margin-left: 30px;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;

  width: 150px;
  height: 40px;

  background: #eee;
  border: none;
`;

export { AlertContainer, Title, Description, Button };
