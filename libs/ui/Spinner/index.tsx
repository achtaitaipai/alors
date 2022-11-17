import React, { useEffect, useState } from "react";

interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {}
const Spinner: React.FC<SpinnerProps> = (props) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const frames = [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛",
  ];
  useEffect(() => {
    const id = setInterval(
      () => setCurrentFrame((currentFrame + 1) % frames.length),
      20
    );

    return () => clearInterval(id);
  });
  return <span {...props}>{frames[currentFrame]}</span>;
};
export default Spinner;
