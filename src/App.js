import "./App.css";
import Letter from "./components/Letter";
import Letters from "./components/Letters";
import Score from "./components/Score";
import Solution from "./components/Solution";
import { useState } from "react";
import EndGame from "./components/EndGame";

function App() {
  const generateLetterStatuses = function () {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  const [game, setGame] = useState({
    letterStatus: generateLetterStatuses(),
  });

  const correctLetter = function (letter) {
    let word = solution.word.split("");
    let isExist = word.find((w) => w == letter);
    let newScore = score;
    if (isExist) {
      newScore += 5;
      setScore(newScore);
      return;
    } else {
      newScore -= 20;
      setScore(newScore);
      return;
    }
  };

  const selctedLetter = function (letter) {
    let newLetterStatus = { ...game.letterStatus };
    newLetterStatus[letter] = true;
    setGame({ letterStatus: newLetterStatus });
    correctLetter(letter);
  };

  const [solution, setSolution] = useState({
    word: "HENRY",
    hint: "LIKE TO SWIM IN WINTER",
  });

  const [score, setScore] = useState(100);

  return (
    <div>
      <Score score={score} />
      <Solution letterStatus={game.letterStatus} solution={solution} />
      <Letters letterStatus={game.letterStatus} selctedLetter={selctedLetter}>
        <Letter />
      </Letters>
      <EndGame
        word={solution.word}
        score={score}
        selctedLetter={selctedLetter}
        letterStatus={game.letterStatus}
      />
    </div>
  );
}

export default App;
