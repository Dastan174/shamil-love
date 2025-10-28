"use client";
import styles from "./page.module.css";
import DistancePic from "../components/distancePic/DistancePic";
import VideoShamil from "../components/videoShamil/VideoShamil";
import Song from "../components/song/Song";
import Trip from "../components/trip/Trip";
import LoveCard from "../components/loveCard/LoveCard";
import Chat from "../components/chat/Chat";
import LastChat from "../components/lastChat/LastChat";
import HeartsRain from "../shared/rain/HeartsRain";
import Slider from "../components/slider/Slider";

import { useEffect, useRef, useState } from "react";
import Balloons from "../components/balloons/Balloons";
import Image from "next/image";

export default function Home() {
  const [onOpen, setOnOpen] = useState(false);
  const [rainActive, setRainActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // const handlePlay = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play();
  //   }
  // };
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

  const handleCardOpen = () => {
    setOnOpen(true);
    setRainActive(true);
  };

  return (
    <div className={styles.page}>
      <audio ref={audioRef} loop>
        <source src="/shamaSong.mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио.
      </audio>

      {/* <button onClick={handlePlay}>play music</button> */}
      <LoveCard onOpen={handleCardOpen} />
      {onOpen && (
        <>
          {rainActive && <HeartsRain />}
          <div className="wrapper">
            <Image
              src="/assets/two.jpg"
              alt="love"
              width={475}
              height={830}
              className="img"
            />
          </div>
          <Slider />
          <DistancePic />
          <Chat />
          <VideoShamil />
          <div className="wrapper">
            <Image
              src="/assets/four.png"
              alt="love"
              width={475}
              height={730}
              className="img"
            />
          </div>
          <Balloons />
          <Song />
          <Trip />
          <LastChat />
        </>
      )}
    </div>
  );
}
