import Image from "next/image";
import React from "react";

const Song = () => {
  return (
    <div className="main">
      <Image src="/assets/song.png" alt="song" width={450} height={600} />
    </div>
  );
};

export default Song;
