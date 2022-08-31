import React, { memo } from "react";
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
        <div>
          popup
          <Toggle.Off>popupDelete</Toggle.Off>
        </div>
      </Toggle.OnTime>
    </Toggle>
  );
});

export default RegisterToggle;
