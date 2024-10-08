import React from "react";
import Image from "next/image";
import CD_BOSTON from "@/public/images/CD_BOSTON.png";
import CD_BEACH from "@/public/images/CD_BEACH.png";
import CD_WOODS from "@/public/images/CD_WOODS.png";

const images = [CD_BOSTON, CD_BEACH, CD_WOODS];

const Info = () => {
  return (
    <div className="flex items-center justify-center bg-pink-400 -mt-56 z-50 rounded-[5rem]">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex justify-center items-center flex-col sm:flex-row p-4 relative z-50 mt-14 mb-48"
        >
          <Image src={image} alt="Christine Dazzo" width={400} height={400} />
        </div>
      ))}
    </div>
  );
};

export default Info;
