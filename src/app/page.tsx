import styles from "./page.module.css";
import DistancePic from "../components/distancePic/DistancePic";
import VideoShamil from "../components/videoShamil/VideoShamil";
import Song from "../components/song/Song";
import Trip from "../components/trip/Trip";

export default function Home() {
  return (
    <div className={styles.page}>
      <DistancePic />
      <VideoShamil />
      <Song />
      <Trip />
    </div>
  );
}
