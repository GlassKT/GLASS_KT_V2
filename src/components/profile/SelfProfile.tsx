import React from "react";
import Modal from "../modal";
import Toggle from "../common/toggle/Toggle";
import { Failure, Success } from "../modal/Modal";
import {
  SelfContainer,
  SelftImage,
  InfoContainer,
  LabelContainer,
  Label,
  LabelTarget,
  ButtonContainer,
  Modify,
  Logout,
} from "./self.style";
import test from "../../assets/images/test.png";

const SelfProfile = () => {
  return (
    <SelfContainer>
      <SelftImage src={test} alt="" />
      <InfoContainer>
        <LabelContainer>
          <Label htmlFor="name">이름</Label>
          <LabelTarget id="name">강성훈</LabelTarget>
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="email">이메일</Label>
          <LabelTarget id="email">GlassKT1234@naver.com</LabelTarget>
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="hobby">취미</Label>
          <LabelTarget id="hobby">#코딩 #쇼핑</LabelTarget>
        </LabelContainer>
      </InfoContainer>
      <ButtonContainer>
        <Logout>로그아웃</Logout>
        <Toggle>
          <Toggle.On>
            <SelfProfile.Modals />
          </Toggle.On>
          <Toggle.Trigger>
            <Modify>수정</Modify>
          </Toggle.Trigger>
        </Toggle>
      </ButtonContainer>
    </SelfContainer>
  );
};

const Modals = () => {
  return (
    <Modal>
      <div style={{ height: "768px", marginLeft: "50px", marginRight: "88px" }}>
        <Modal.Images />
        <Modal.Description />
        <Modal.Name />
        <Modal.Id />
      </div>
      <div style={{ height: "768px" }}>
        <Modal.Hobby />
        <Modal.Birth />
        <Modal.Area />
        <Modal.Email />
        <Modal.MBTI />
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          position: "absolute",
          bottom: "64px",
          left: "120px",
        }}
      >
        <Modal.Request>
          <Toggle.Off>
            <Success>확인</Success>
          </Toggle.Off>
        </Modal.Request>
        <Toggle.Off>
          <Failure>취소</Failure>
        </Toggle.Off>
      </div>
    </Modal>
  );
};

SelfProfile.Modals = Modals;

export default SelfProfile;
