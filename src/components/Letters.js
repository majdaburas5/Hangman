import React from "react";
import Letter from "./Letter";

export default function Letters({ letterStatus, selctedLetter }) {
  let letters = Object.keys(letterStatus);

  return (
    <div>
      <div>Available Letters</div>
      {letters.map((l) => (
        <Letter
          letter={l}
          letterClass={letterStatus[l] ? "line-through" : " "}
          selctedLetter={selctedLetter}
        />
      ))}
    </div>
  );
}
