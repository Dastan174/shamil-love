import styles from "./videoShamil.module.css";
const VideoShamil = () => {
  return (
    <div className={styles.wrapper}>
      <iframe
        src="https://drive.google.com/file/d/12RwpaTN4i0P6cgvIbDAYq3j60WpFX6x8/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoShamil;
