import React from "react";
import HeroDark from "@/public/images/hero-dark.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src={HeroDark}
        alt="Hero"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default Hero;
