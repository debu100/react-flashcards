import React, { useState } from "react";
import "./css/style.css";

const Flashcard = ({ questions }) => {
  const [flippedId, setFlippedId] = useState(null); // Only one card flips at a time

  function handleClick(id) {
    setFlippedId((prevId) => (prevId === id ? null : id)); // Flip if new, unflip if same
    // setFlippedId(id);
  }

  return (
    <div>
      <h1>Flashcard - One card at a time</h1>
      <div className="cards-box">
        {questions.map((question) => (
          <div
            key={question.id}
            className={`card-box ${flippedId === question.id ? "flipped" : ""}`}
            onClick={() => handleClick(question.id)}
          >
            <h3>
              {flippedId === question.id ? question.answer : question.question}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcard;
