"use client";
import { useState } from "react";
import AnswerChat from "../../shared/answerChat/AnswerChat";

export default function FooterChat() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div className="last-chat-pad">
      <div className="mainbek">
        <button className="btn" onClick={() => setChatVisible(true)}>
          Ответить 💌
        </button>
      </div>
      <AnswerChat visible={chatVisible} onClose={() => setChatVisible(false)} />
    </div>
  );
}
