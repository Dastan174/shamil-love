import Image from "next/image";
import React from "react";

const Trip = () => {
  return (
    <div className="wrapper">
      <Image
        src="/assets/trip.png"
        alt="trip"
        width={475}
        height={600}
        className="img"
      />
    </div>
  );
};

export default Trip;
