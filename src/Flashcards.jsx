import React, { useState } from "react";
import "./css/style.css";

const Flashcards = ({ questions }) => {
  const [flippedCards, setFlippedCards] = useState({});

  function handleClick(id) {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <div>
      <h1>Flashcards - All cards at same time</h1>
      <div className="cards-box">
        {questions.map((question) => (
          <div
            key={question.id}
            className={`card-box ${flippedCards[question.id] ? "flipped-bg" : ""}`}
            onClick={() => handleClick(question.id)}
          >
            <h3>
              {flippedCards[question.id] ? question.answer : question.question}
            </h3>
            {/* <h3>{question.answer}</h3> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
