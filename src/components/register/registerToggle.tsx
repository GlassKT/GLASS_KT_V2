import React, { memo } from "react";
import Alert from "../common/alert";
import Toggle from "../common/toggle/Toggle";
import { Label } from "./RegisterForm";

interface RegisterToggleType {
  sendEmail: () => void;
}

const RegisterToggle = memo(({ sendEmail }: RegisterToggleType) => {
  return (
    <Toggle>
      <Toggle.Trigger>
        <Label htmlFor="email" onClick={sendEmail}>
          인증
        </Label>
      </Toggle.Trigger>
      <Toggle.OnTime>
        <Alert>
          <Alert.title>이메일 인증</Alert.title>
          <Alert.description>
            입력하신 이메일로 전송되었습니다.
          </Alert.description>
          <Toggle.Off>popupDelete</Toggle.Off>
        </Alert>
      </Toggle.OnTime>
    </Toggle>
  );
});

export default RegisterToggle;
