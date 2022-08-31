import styled from "styled-components";

const Register = styled.form`
  width: 400px;
`;

const Input = styled.input`
  height: 60px;
  border: none;
  outline: none;
  background: white;
  padding-left: 20px;

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  &[id="email"] {
    width: 260px;
    margin-right: 40px;
  }

  &[id="pw"] {
    width: 100%;
  }
`;

const ShowToggle = styled.p``;

const RegisterButton = styled.button`
  width: 100%;
  height: 60px;
  background: linear-gradient(
    180deg,
    #5c9dff 0%,
    rgba(92, 157, 255, 0.51) 100%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  margin-top: 68px;
  cursor: pointer;
  color: white;
  font-size: 18px;

  :hover {
    background: linear-gradient(
      180deg,
      #5c9dff 30%,
      rgba(92, 157, 255, 0.51) 100%
    );
  }
`;

const Label = styled.label``;

const InputLabel = styled.div`
  height: 104px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #868686;

  & + & {
    margin-top: 24px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;

  &[id="relative"] {
    position: relative;
  }
`;

const Email = styled.div`
  width: 100px;
  height: 60px;
  background: linear-gradient(
    180deg,
    #5c9dff 0%,
    rgba(92, 157, 255, 0.51) 100%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  cursor: pointer;

  :hover {
    background: linear-gradient(
      180deg,
      #5c9dff 30%,
      rgba(92, 157, 255, 0.51) 100%
    );
  }
`;

const Show = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translate(0, -50%);
`;

export {
  Register,
  Input,
  ShowToggle,
  RegisterButton,
  Label,
  InputLabel,
  Flex,
  Email,
  Show,
};
