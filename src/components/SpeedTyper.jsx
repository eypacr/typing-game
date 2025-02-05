/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const SpeedTyper = ({ difficulty }) => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const words = {
    "easy": ["elma", "muz", "Üzüm", "çilek", "karpuz", "armut", "portakal"],
  "medium": ["fil", "gitar", "bilgisayar", "telefon", "tablet", "televizyon", "radyo"],
  "hard": [
    "aşkınsızlaşacağım",
    "görüntüleyicilik",
    "sosyalleşme",
    "zihinselolarak",
    "düşüncesizlik",
    "mesafesizlik",
    "antikonvansiyonel"
  ],
  };

  useEffect(() => {
    setWord(
      words[difficulty][Math.floor(Math.random() * words[difficulty].length)]
    );
    setTimeLeft(10);
    setScore(0);
    setInput("");
    setGameOver(false);
  }, [difficulty]);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
    }

    if (!gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, gameOver]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === word) {
      setScore((prevScore) => prevScore + 1);
      setWord(
        words[difficulty][Math.floor(Math.random() * words[difficulty].length)]
      );
      setInput("");

      if (difficulty === "hard") {
        setTimeLeft((prevTime) => prevTime + 2);
      } else if (difficulty === "medium") {
        setTimeLeft((prevTime) => prevTime + 3);
      } else {
        setTimeLeft((prevTime) => prevTime + 7);
      }
    }
  };

  return (
    <div className="container">
      <h2>👩‍💻 Hızlı Yazıcı 👨‍💻</h2>
      <small>Şunları yazınız:</small>

      <h1 id="word">{word}</h1>

      <input
        type="text"
        id="text"
        value={input}
        onChange={handleInputChange}
        autoComplete="off"
        placeholder="Kelimeyi buraya yazın..."
        autoFocus
        disabled={gameOver}
      />

      <p className="time-container">
      Kalan zaman: <span id="time">{timeLeft} saniye</span>
      </p>

      <p className="score-container">
        Puan: <span id="score">{score}</span>
      </p>

      {gameOver && (
        <div id="end-game-container">Oyun bitti! Puanınız {score}</div>
      )}
    </div>
  );
};

export default SpeedTyper;
