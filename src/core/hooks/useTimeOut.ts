import { DependencyList, useEffect, useRef } from "react";

const useTimeOut = (callback: () => void, time: number, on: DependencyList) => {
  const timer = useRef(null);

  useEffect(() => {
    if (on[0]) {
      const temp = setTimeout(() => {
        callback();
      }, time);
      timer.current = temp;
    } else {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, [on]);
};

export default useTimeOut;
