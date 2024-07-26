"use client";

import React, { useRef } from "react";
import Image from "next/image";
import ChrisHeroLg from "@/public/images/hero-dark.png";
import ChrisHeroSm from "@/public/images/chris-hero-sm.png";
import ChrisSig from "@/public/images/Christine-Dazzo-6-6-2024.png";
import Barcode from "./Barcode";
import InstagramWorks from "@/components/hero/InstagramInfo";
import LinkedInWork from "@/components/hero/LinkedInWork";
import { Oswald, Playfair_Display } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";

const oswald = Oswald({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
});

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spanClass = `${play.className} text-base xl:text-center text-end`;

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="w-screen h-screen overflow-hidden relative ">
      <div className="flex flex-row justify-between px-5">
        <InstagramWorks />

        <LinkedInWork />
      </div>
      <div className="z-50 flex items-center justify-center mt-16">
        <Image
          src={ChrisSig}
          alt="Christine Dazzo"
          width={1000}
          height={1000}
        />
      </div>
      <motion.div
        style={{
          y: backgroundY,
        }}
        ref={ref}
        className="absolute top-0 left-0 w-screen h-screen -z-10"
      >
        <Image
          src={ChrisHeroLg}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-50 hidden sm:flex"
        />

        <Image
          src={ChrisHeroSm}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="-z-50 flex sm:hidden"
        />
      </motion.div>

      <div className="absolute bottom-5 w-screen px-5 flex flex-row justify-center sm:justify-between items-end">
        <Barcode />
        <div className="text-center sm:text-end 2xl:text-center max-w-sm 2xl:mb-10 xl:max-w-2xl">
          <h2
            className={`text-pink-400 text-xl lg:text-2xl font-thin ${oswald.className}`}
          >
            WORKING ON PROJECTS FOR
          </h2>
          <div className="flex items-center justify-center sm:justify-end 2xl:justify-center">
            <h2 className="text-pink-400 text-4xl lg:text-5xl my-3">BRAND</h2>
            <h2 className="text-pink-400 text-4xl lg:text-5xl my-3 mx-7">
              DIRECTION
            </h2>
            <h2 className="text-pink-400 text-4xl lg:text-5xl my-3">DIGITAL</h2>
          </div>
          <h3
            className={`text-pink-400 text-base lg:text-xl font-thin ${oswald.className}`}
          >
            COLLABORATING
            <span className={`${spanClass}`}> WITH </span>
            AMBITIOUS BRANDS
            <span className={`${spanClass}`}> THAT HAVE </span>
            POWERFUL STORIES
            <span className={`${spanClass}`}> TO TELL. I WORK </span>
            INDEPENDENTLY
            <span className={`${spanClass}`}> AND WITH </span>
            CREATIVE FREELANCERS, STUDIOS
            <span className={`${spanClass}`}> AND </span>
            AGENCIES
          </h3>
        </div>
        <div className="hidden 2xl:flex relative video-container">
          <h2 className="text-pink-400 text-3xl my-3 absolute bottom-2 left-4 z-50">
            latest work
          </h2>
          <video
            autoPlay
            loop
            muted
            playsInline
            data-object-fit="cover"
            className="video w-96"
            src="https://assets-global.website-files.com/6201a8e3c7f99b635572faff/64f1e390abe5e50b2ec94273_dsmov-transcode.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Hero;
