import Image from "next/image";
import React from "react";

const DistancePic = () => {
  return (
    <div className="main">
      <Image src="/distancePhoto.jpg" alt="dist" fill className="img" />
    </div>
  );
};

export default DistancePic;
