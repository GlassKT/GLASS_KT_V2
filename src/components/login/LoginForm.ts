import styled from "styled-components";

const Login = styled.form`
  width: 400px;
  min-height: 420px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 400px;
  height: 60px;
  border: none;
  background: #ffffff;
  font-size: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  flex-shrink: 0;

  outline: none;
  padding-left: 10px;
`;

const Label = styled.label`
  color: #868686;
`;

const IdInputContainer = styled.div`
  width: 400px;
  height: 104px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  flex-shrink: 0;

  & + & {
    margin-top: 18px;
  }
`;

const LoginRequest = styled.button`
  border: none;
  width: 400px;
  height: 60px;

  margin-top: 68px;
  color: white;
  font-size: 18px;
  background: linear-gradient(
    180deg,
    #5c9dff 0%,
    rgba(92, 157, 255, 0.51) 100%
  );

  flex-shrink: 0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
    background: linear-gradient(
      180deg,
      #5c9dff 100%,
      rgba(92, 157, 255, 0.51) 100%
    );
  }
`;
const PasswordInputContainer = styled.div`
  width: 400px;
  height: 104px;
`;
export {
  Login,
  Input,
  LoginRequest,
  IdInputContainer,
  Label,
  PasswordInputContainer,
};
