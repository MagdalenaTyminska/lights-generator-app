import { useState } from "react";
import LightGray from "/images/light-gray.svg";
import LightYellow from "/images/light-yellow.svg";
import LightRed from "/images/light-red.svg";
import LightOrange from "/images/light-orange.svg";
import LightBlue from "/images/light-blue.svg";
import LightGreen from "/images/light-green.svg";
import LightPink from "/images/light-pink.svg";

const lights = [
  LightYellow,
  LightRed,
  LightOrange,
  LightBlue,
  LightGreen,
  LightPink,
];

export const SingleLight = () => {
  const [isOn, setOn] = useState(true);

  const getRandomIndex = () => {
    return Math.floor(Math.random() * lights.length);
  };

  const randomIndex = getRandomIndex();

  const imageSrc = isOn ? lights[randomIndex] : LightGray;

  const handleToggle = () => {
    setOn(!isOn);
  };

  return <img onClick={handleToggle} src={imageSrc} alt="Single light" />;
};
