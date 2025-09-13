import Image from "next/image";
import React from "react";

const DistancePic = () => {
  return (
    <div className="main">
      <Image
        src="/distancePhoto.jpg"
        alt="dist"
        width={475}
        height={830}
        className="img"
      />
    </div>
  );
};

export default DistancePic;
