import { createContext, useContext, useState } from "react";
import defaultAvatar from "../assets/avatarstor.svg";

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarSrc, setAvatarSrc] = useState(defaultAvatar);

  const changeAvatar = (newAvatar) => {
    setAvatarSrc(newAvatar);
  };

  return (
    <AvatarContext.Provider value={{ avatarSrc, changeAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
