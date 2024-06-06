import React from "react";
import Image from "next/image";
import HeroDark from "@/public/images/hero-dark.png";
import ChrisSig from "@/public/images/Christine-Dazzo-6-6-2024.png";

const Hero = () => {
  return (
    <div className=" w-screen overflow-hidden ">
      <div className="z-50 flex items-center justify-center mt-32">
        <Image
          src={ChrisSig}
          alt="Christine Dazzo"
          width={1000}
          height={1000}
        />
      </div>
      <Image
        src={HeroDark}
        alt="Hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-50"
      />
    </div>
  );
};

export default Hero;
