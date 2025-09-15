import Image from "next/image";
import React from "react";

const Song = () => {
  return (
    <div className="wrapper">
      <Image
        src="/assets/song.png"
        alt="song"
        width={475}
        height={600}
        className="img"
      />
    </div>
  );
};

export default Song;
