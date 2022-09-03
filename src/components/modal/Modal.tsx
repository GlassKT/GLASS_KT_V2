import styled from "styled-components";

const NameContainer = styled.div`
  width: 400px;
  height: 104px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 18px;

  letter-spacing: -0.02em;

  color: #868686;
`;

const InputName = styled.input<Input>`
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  height: 60px;
  padding-left: 10px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HobbyContainer = styled.div`
  width: 400px;
  height: 184px;
`;

const InputHobby = styled.input`
  width: 260px;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  padding-left: 10px;
`;

const HobbyAdd = styled.button`
  width: 100px;
  height: 60px;
  background: linear-gradient(
    180deg,
    #5c9dff 0%,
    rgba(92, 157, 255, 0.51) 100%
  );
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  border: none;
  color: white;

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #ffffff;
  cursor: pointer;
`;

const HobbyItemContainer = styled.div`
  width: 400px;
  margin-top: 40px;

  display: flex;
  gap: 24px;
  flex-shrink: 0;

  overflow-x: scroll;
`;
const HobbyItem = styled.div`
  min-width: 81px;
  height: 40px;

  padding-left: 5px;
  padding-right: 5px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const RequestButton = styled.div``;

const Image = styled.img`
  width: 150px;
  height: 150px;

  border-radius: 50%;
  border: 1px solid black;

  margin-top: 60px;
`;

const ModalContainer = styled.div`
  width: 480px;
  height: 738px;

  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Success = styled.div`
  width: 188px;
  height: 60px;
  background: #000000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  color: white;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`;
const Failure = styled.div`
  border: none;
  color: white;
  width: 188px;
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
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
`;

export {
  InputName,
  HobbyContainer,
  HobbyAdd,
  HobbyItemContainer,
  RequestButton,
  ModalContainer,
  Image,
  NameContainer,
  Label,
  Flex,
  InputHobby,
  HobbyItem,
  Success,
  Failure,
};

interface Input {
  type: string;
  value: string;
  onChange: any;
}
