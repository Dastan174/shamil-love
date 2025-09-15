"use client";
import styles from "./page.module.css";
import DistancePic from "../components/distancePic/DistancePic";
import VideoShamil from "../components/videoShamil/VideoShamil";
import Song from "../components/song/Song";
import Trip from "../components/trip/Trip";
import LoveCard from "../components/loveCard/LoveCard";
import { useState } from "react";

export default function Home() {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div className={styles.page}>
      <LoveCard onOpen={() => setOnOpen(true)} />
      {onOpen && (
        <>
          <DistancePic />
          <VideoShamil />
          <Song />
          <Trip />
        </>
      )}
    </div>
  );
}
