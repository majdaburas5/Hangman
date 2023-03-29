import React from "react";

export default function Score({ score }) {
  const checkScore = function () {
    if (score >= 80) return "high-score";
    else if (score >= 50 && score <= 80) return "medium-score";
    else if (score < 50) return "low-score";
  };
  return (
    <div>
      <div className="guess-header">GUESS GAME</div>
      <div className={checkScore()}>{score}</div>
    </div>
  );
}
