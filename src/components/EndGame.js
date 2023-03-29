import React from "react";

export default function EndGame({ word, score, letterStatus }) {
  const checkGameStatus = function () {
    if (score <= 0) return `OOP, YOU LOSE! The secret word was ${word}`;
    let specificWord = word.split("");
    let flag = 0;
    let wordLength = specificWord.length;
    let letters = Object.keys(letterStatus);
    for (let i = 0; i < specificWord.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        if (specificWord[i] == letters[j] && letterStatus[letters[j]] == true)
          flag++;
      }
    }
    if (flag == wordLength) return "Congratulations";
  };
  return <div>{checkGameStatus()}</div>;
}
