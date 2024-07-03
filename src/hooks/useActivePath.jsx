import { useLocation } from "react-router-dom";

const useActivePath = (path) => {
  const location = useLocation();
  return location.pathname === path;
};

export default useActivePath;
