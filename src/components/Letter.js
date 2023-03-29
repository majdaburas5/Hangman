import React, { useState } from "react";

export default function Letter({ letter, letterClass, selctedLetter }) {
  const [click, setClick] = useState(false);
  const checkIfClicked = () => {
    if (click == false) {
      setClick(true);
      selctedLetter(letter);
    }
  };
  return (
    <span className={letterClass} onClick={checkIfClicked}>
      {letter + " "}
    </span>
  );
}
