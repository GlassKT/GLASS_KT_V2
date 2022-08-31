import React, { memo } from "react";
import Alert from "../common/alert";
import Toggle from "../common/toggle/Toggle";
import { Email, Label } from "./RegisterForm";

interface RegisterToggleType {
  sendEmail: () => void;
}

const RegisterToggle = memo(({ sendEmail }: RegisterToggleType) => {
  return (
    <Toggle>
      <Toggle.Trigger>
        <Label htmlFor="email" onClick={sendEmail}>
          <Email>인증</Email>
        </Label>
      </Toggle.Trigger>
      <Toggle.OnTime>
        <Alert>
          <Alert.title>이메일 인증</Alert.title>
          <Alert.description>
            입력하신 이메일로 전송되었습니다
          </Alert.description>
          <Toggle.Off>
            <Alert.Off>popupDelete</Alert.Off>
          </Toggle.Off>
        </Alert>
      </Toggle.OnTime>
    </Toggle>
  );
});

export default RegisterToggle;
