"use client";
import { useState } from "react";

export default function SwipeCard() {
  const [showCard, setShowCard] = useState(false);
  let startY = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY < -50) {
      // свайп вниз
      setShowCard(true);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {!showCard && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#f9eaf3",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            touchAction: "none",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <h1 style={{ fontSize: "32px" }}>
            💌 Потяни вниз, чтобы открыть открытку
          </h1>
        </div>
      )}

      {showCard && (
        <>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(135deg, #ffe0f0, #ffd6e8)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "36px", color: "#d63384" }}>
              Люблю тебя ❤️
            </h1>
            <p style={{ fontSize: "20px", color: "#555" }}>
              Пусть каждый день будет как эта открытка 🌸
            </p>
          </div>
        </>
      )}
    </div>
  );
}
