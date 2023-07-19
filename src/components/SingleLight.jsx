import { useState } from "react";
import LightGray from "/images/light-gray.svg";
import LightYellow from "/images/light-yellow.svg";

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const imageSrc = isOn ? LightYellow : LightGray;

  const handleToggle = () => {
    setOn(!isOn);
  };

  return <img onClick={handleToggle} src={imageSrc} alt="Single light" />;
};
