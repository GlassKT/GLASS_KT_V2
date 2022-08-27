import React, { memo } from "react";
import Toggle from "../common/toggle/Toggle";

const RegisterToggle = memo(({ sendEmail }: any) => {
  return (
    <Toggle>
      <Toggle.Trigger>
        <label htmlFor="email" onClick={sendEmail}>
          인증
        </label>
      </Toggle.Trigger>
      <Toggle.On>
        <div>
          popup
          <Toggle.Off>popupDelete</Toggle.Off>
        </div>
      </Toggle.On>
    </Toggle>
  );
});

export default RegisterToggle;
