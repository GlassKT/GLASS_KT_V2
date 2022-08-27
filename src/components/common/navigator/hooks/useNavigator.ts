import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const useNavBar = () => {
  const router = useLocation();

  const selectedNavBarElement = useRef({
    home: false,
    profile: false,
  });
};

export default useNavBar;
