"use client";
import { useState } from "react";
import "./loveCard.css";
export default function CurtainCard() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleStart = () => {
    setCurtainOpen(true);
  };

  const handleTransitionEnd = () => {
    setShowCard(true); // после окончания анимации показываем открытку
  };

  return (
    <div className="container">
      {!showCard && (
        <div className="curtain-wrapper" onClick={handleStart}>
          <div
            className={`curtain left ${curtainOpen ? "open" : ""}`}
            onTransitionEnd={handleTransitionEnd}
          ></div>
          <div className={`curtain right ${curtainOpen ? "open" : ""}`}></div>
          <h1
            style={{ display: !curtainOpen ? "flex" : "none" }}
            className="curtain-text"
          >
            💌 Нажми, чтобы открыть открытку
          </h1>
        </div>
      )}

      {showCard && (
        <>
          <div className="card-content">
            <img src="/assets/opening.jpg" alt="" />
          </div>
        </>
      )}
    </div>
  );
}
