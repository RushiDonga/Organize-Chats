import { createContext, useEffect, useState } from "react";
import getCurrentDate from "../utils/getCurrentDate";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const existingData = localStorage.getItem(import.meta.env.VITE_COOKIE_KEY);
    if (!existingData) {
      localStorage.setItem(import.meta.env.VITE_COOKIE_KEY, JSON.stringify({}));
    } else {
      setUserData(() => JSON.parse(existingData));
    }
  }, []);

  function updateUserData(data) {

    console.log("In Global Data: ", data);

    const currentDate = getCurrentDate();

    const updatedData = {
        ...userData,
        [currentDate]: data
    }

    console.log("Data with Date: ", updatedData);
    setUserData(updatedData);

    localStorage.setItem(import.meta.env.VITE_COOKIE_KEY, JSON.stringify(updatedData));
  }

  const UserFeatures = {
    getUserData: userData,
    updateUserData: updateUserData,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
  };

  return (
    <UserContext.Provider value={UserFeatures}>{children}</UserContext.Provider>
  );
}
