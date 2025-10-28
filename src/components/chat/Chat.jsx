"use client";
import { useEffect, useState } from "react";
import "./chat.css";
import Chat from "../../shared/chat/Chat";

export default function ChatLetter() {
  const [chatVisible, setChatVisible] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShake(true);
      setTimeout(() => setShake(false), 600); // остановка анимации
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="mainbek">
        <div className="mail-wrapper" onClick={() => setChatVisible(true)}>
          <div className={`mail-icon ${shake ? "shake" : ""}`}>
            💌
            <span className="badge">1</span>
          </div>
          <span className="tooltip">Нажми на иконку</span>
        </div>
      </div>

      <Chat visible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
}
