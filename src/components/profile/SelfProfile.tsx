import React from "react";
import Modal from "../modal";
import Toggle from "../common/toggle/Toggle";

const SelfProfile = () => {
  return (
    <div>
      <div className="name"></div>
      <div className="email"></div>
      <div className="hobby"></div>
      <Toggle>
        <Toggle.On>
          <SelfProfile.Modals />
        </Toggle.On>
        <Toggle.Trigger>
          <div className="modify">수정</div>
        </Toggle.Trigger>
      </Toggle>
      <div className="logout">로그아웃</div>
    </div>
  );
};

const Modals = () => {
  return (
    <Modal>
      <Modal.Name />
      <Modal.Hobby />
      <Modal.Request>
        <Toggle.Off>확인</Toggle.Off>
      </Modal.Request>
    </Modal>
  );
};

SelfProfile.Modals = Modals;

export default SelfProfile;
