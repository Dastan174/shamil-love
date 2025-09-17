"use client";
import { useState, useEffect } from "react";

export default function AnswerChat({ visible, onClose }) {
  const [messages, setMessages] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [showTyping, setShowTyping] = useState(false);

  const baynurMessage =
    "Хотя мы далеко друг от друга, я всё равно чувствую твою любовь. Думаю о том, как скоро будем вместе и реализуем наши планы.";
  const begimayMessage =
    "Я тоже скучаю и чувствую тебя рядом. Наши мечты обязательно сбудутся, и мы скоро будем вместе.";

  useEffect(() => {
    if (!visible) return;

    setMessages([{ sender: "Шамиль", text: baynurMessage }]);
    setCurrentText("");
    setShowTyping(true);

    let index = 0;
    const typingInterval = setInterval(() => {
      setCurrentText(begimayMessage.slice(0, index + 1));
      index++;
      if (index === begimayMessage.length) {
        clearInterval(typingInterval);
        setMessages((prev) => [
          ...prev,
          { sender: "Айданек💗", text: begimayMessage },
        ]);
        setShowTyping(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="chat-overlay">
      {/* Крестик вынесен за пределы контейнера */}
      <button className="close-btn" onClick={onClose}>
        ✖️
      </button>

      <div className="chat-container">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${
              msg.sender === "Шамиль" ? "chat-right" : "chat-left"
            }`}
          >
            <p className="person">{msg.sender}</p>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {showTyping && (
          <div className="chat-message chat-left">
            <p className="person">Айданек💗..</p>
            <div className="bubble">{currentText || "…"}</div>
          </div>
        )}
      </div>
    </div>
  );
}
