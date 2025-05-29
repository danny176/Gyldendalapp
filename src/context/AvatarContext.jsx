import { createContext, useContext, useState } from "react";

import defaultAvatar from "../assets/avatarstor.svg";
import avatarHat from "../assets/avatarstorhat.svg";
import avatarFlower from "../assets/avatarstorblomst.svg";
import avatarSuperman from "../assets/avatarstorsuperman.svg";
import avatarSupermanHat from "../assets/avatarstorsuperman+hat.svg";
import avatarSupermanFlower from "../assets/avatarstorsuperman+blomst.svg";

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [clothing, setClothing] = useState("default"); // "default" | "superman"
  const [headwear, setHeadwear] = useState("none"); // "none" | "hat" | "flower"

  // Return the correct static image based on combination
  const getAvatarSrc = () => {
    if (clothing === "default" && headwear === "none") return defaultAvatar;
    if (clothing === "default" && headwear === "hat") return avatarHat;
    if (clothing === "default" && headwear === "flower") return avatarFlower;
    if (clothing === "superman" && headwear === "none") return avatarSuperman;
    if (clothing === "superman" && headwear === "hat") return avatarSupermanHat;
    if (clothing === "superman" && headwear === "flower")
      return avatarSupermanFlower;
  };

  return (
    <AvatarContext.Provider
      value={{
        clothing,
        setClothing,
        headwear,
        setHeadwear,
        avatarSrc: getAvatarSrc(),
      }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
