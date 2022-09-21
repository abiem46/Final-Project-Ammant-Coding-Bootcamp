import { useState, useEffect } from "react";

export const useCheckLogin = () => {
  const [userData, setUserData] = useState(null);

  const getLocalStorage = () => {
    let userlogin = localStorage.getItem("userLogin");
    setUserData(JSON.parse(userlogin));
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  return { userData, setUserData };
};
