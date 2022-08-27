import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useEffectAfterMount from "../../../core/hooks/useEffetAfterMount";
import useTimeOut from "../../../core/hooks/useTimeOut";

const noop = () => null;
const ToggleContext = createContext<ToggleContextType>({
  on: false,
  toggle: noop,
});

const Toggle = ({ onToggle, children }: ToggleProps) => {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => {
    setOn((oldOn) => !oldOn);
  }, []);
  const value: ToggleContextType = useMemo(
    () => ({ on, toggle }),
    [on, toggle]
  );

  useEffectAfterMount(() => {
    if (onToggle) onToggle(on);
  }, [on]);

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

const useToggleContext = (): ToggleContextType => {
  const contextValue = useContext(ToggleContext);
  if (!contextValue) throw new Error(`Toggle컴포넌트를 감싸주세요.`);
  return contextValue;
};

const On = ({ children }: { children: React.ReactNode }) => {
  const { on, toggle } = useToggleContext();

  useTimeOut(
    () => {
      toggle();
    },
    3000,
    [on]
  );

  return on ? <>{children}</> : null;
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { on, toggle } = useToggleContext();
  return <p onClick={!on ? toggle : null}>{children}</p>;
};

const Off = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggleContext();
  return <button onClick={toggle}>{children}</button>;
};

Toggle.On = On;
Toggle.Trigger = Trigger;
Toggle.Off = Off;

export default Toggle;
