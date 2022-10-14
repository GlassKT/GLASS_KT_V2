import styled from "styled-components";

const SelfContainer = styled.div`
  width: 1420px;
  height: 291px;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
`;

const SelftImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100px;

  border: 1px solid black;

  margin-left: 120px;
`;

const InfoContainer = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  width: 682px;

  height: 138px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;

const LabelTarget = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
`;

const ButtonContainer = styled.div`
  width: 268px;
  height: 211px;

  display: flex;
  align-items: flex-end;

  gap: 28px;
`;

const Modify = styled.div`
  width: 120px;
  height: 48px;
  background: #5c9dff;

  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: white;
  cursor: pointer;
`;

const Logout = styled.div`
  width: 120px;
  height: 48px;
  background: #000;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: white;
`;

export {
  SelfContainer,
  SelftImage,
  InfoContainer,
  LabelContainer,
  Label,
  LabelTarget,
  ButtonContainer,
  Modify,
  Logout,
};
