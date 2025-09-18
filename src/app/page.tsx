"use client";
import styles from "./page.module.css";
import DistancePic from "../components/distancePic/DistancePic";
import VideoShamil from "../components/videoShamil/VideoShamil";
import Song from "../components/song/Song";
import Trip from "../components/trip/Trip";
import LoveCard from "../components/loveCard/LoveCard";
import Chat from "../components/chat/Chat";
import LastChat from "../components/lastChat/LastChat";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [onOpen, setOnOpen] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const enableSound = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // снимаем mute
        audioRef.current
          .play()
          .catch((e) => console.log("Ошибка воспроизведения:", e));
      }
    };
    document.addEventListener("click", enableSound, { once: true });
    document.addEventListener("scroll", enableSound, { once: true });
    document.addEventListener("keydown", enableSound, { once: true });
    return () => {
      document.removeEventListener("click", enableSound);
      document.removeEventListener("scroll", enableSound);
      document.removeEventListener("keydown", enableSound);
    };
  }, []);
  return (
    <div className={styles.page}>
      <audio ref={audioRef} autoPlay loop>
        <source src="/shamaSong.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>
      <LoveCard onOpen={() => setOnOpen(true)} />
      {/* {onOpen && ( */}
      <>
        <DistancePic />
        <VideoShamil />
        <Song />
        <Trip />
        <Chat />
        <LastChat />
      </>
      {/* )} */}
    </div>
  );
}
