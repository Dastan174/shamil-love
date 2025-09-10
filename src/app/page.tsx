import styles from "./page.module.css";
import DistancePic from "../components/distancePic/DistancePic";

export default function Home() {
  return (
    <div className={styles.page}>
      <DistancePic />
    </div>
  );
}
