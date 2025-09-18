import styles from "./videoShamil.module.css";
const VideoShamil = () => {
  return (
    <div className="wrapper">
      <iframe
        className={styles.img}
        src="https://drive.google.com/file/d/1OwGVnfek36VnwHMyhHjVFqD9aiL8fI88/preview"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default VideoShamil;
