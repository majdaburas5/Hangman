import React from "react";
import Letter from "./Letter";

export default function Solution({ letterStatus, solution }) {
  let word = solution.word.split("");
  let hint = solution.hint;

  return (
    <div>
      {word.map((w) => (
        <Letter letter={letterStatus[w] ? w : " _ "} />
      ))}
      <div>
        <em>{hint}</em>
      </div>
    </div>
  );
}
