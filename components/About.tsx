"use client";

import React, { useRef, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import Lottie from "react-lottie";
import GuyAnimation from "@/lib/man.json";
import ConfettiAnim from "@/lib/confetti.json";
import AnimalGuys from "@/lib/animal.json";
import ChrisSig from "@/public/images/Christine-Dazzo-6-6-2024.png";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const About = () => {
  const spanClass = `${play.className} text-base xl:text-center`;

  const largeTextRef = useRef(null);
  const isLargeTextInView = useInView(largeTextRef);
  const controls = useAnimation();

  const mediumTextRef = useRef(null);
  const isMediumTextInView = useInView(mediumTextRef);
  const mediumControls = useAnimation();

  const smallTextRef = useRef(null);
  const isSmallTextInView = useInView(smallTextRef);
  const smallControls = useAnimation();

  useEffect(() => {
    if (isLargeTextInView) {
      controls.start("visible");
    }

    if (isMediumTextInView) {
      mediumControls.start("visible");
    }

    if (isSmallTextInView) {
      smallControls.start("visible");
    }
  }, [
    isLargeTextInView,
    controls,
    largeTextRef,
    isMediumTextInView,
    mediumControls,
    mediumTextRef,
    isSmallTextInView,
    smallControls,
    smallTextRef,
  ]);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimalGuys,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const textVariants = {
    hidden: {
      y: 175,
      transition: {
        type: "spring",
        duration: 1.25,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duration: 2.25,
      },
    },
  };

  return (
    <div className="items-center justify-center bg-green-800 !leading-[0.5] md:!leading-[0.7] pt-24 overflow-hidden">
      <div>
        <h1 className="text-center p-4 text-pink-400 text-[19.67vw] md:text-[20.78vw]">
          Boston-BASED
        </h1>
        <h1 className="text-center p-4 text-pink-400 text-[14.2vw] md:text-[15vw]">
          DIRECTOR • Marking
        </h1>
        <h1 className="text-center p-4 text-pink-400 text-[14vw] md:text-[14.8vw]">
          CREATIVE DEVELOPER
        </h1>
      </div>
      <motion.div
        ref={mediumTextRef}
        variants={textVariants}
        initial="hidden"
        animate={mediumControls}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-10"
      >
        <h2 className="text-center p-4 text-pink-400 text-3xl md:text-5xl mt-10">
          TELLING MEANINGFUL STORIES THAT NEED TO BE TOLD (BY HUMANS, NOT AI)
        </h2>
        <h3
          className={`text-pink-400 text-xl lg:text-3xl font-thin text-center max-w-3xl`}
        >
          WORKING
          <span className={`${spanClass}  text-end`}> WITH </span>
          PASSIONATE PEOPLE
          <span className={`${spanClass}  text-end`}> & </span>
          DISRUPTORS
          <span className={`${spanClass}  text-end`}>
            {" "}
            TO CREATE MEMORABLE{" "}
          </span>
          BRANDS
          <span className={`${spanClass}  text-end`}> & CAPTIVATING </span>
          DIGITAL EXPERIENCES
          <span className={`${spanClass}  text-end`}> THAT DELIVER </span>
          RESULTS
        </h3>

        <div className="mt-10 flex flex-col md:flex-row mx-auto max-w-7xl justify-center items-center ">
          <div className="flex items-center justify-center ">
            <p className="text-center p-4 text-pink-400 ">
              <span className="text-center p-4 text-pink-400 text-3xl md:text-5xl max-w-xs">
                CREATING STRONG BRANDS BRAND IDENTITY BRAND STRATEGY TYPOGRAPHY
              </span>
            </p>
          </div>
          <div className="hidden md:flex">
            <Lottie options={lottieOptions} height={500} width={500} />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center p-4 text-pink-400">
              <span className="text-center p-4 text-pink-400 text-3xl md:text-5xl max-w-xs">
                DEVELOPING DIGITAL PRODUCTS ART DIRECTION DIGITAL DESIGN
                DEVELOPMENT
              </span>
            </p>
          </div>
        </div>

        <div className="z-50 flex items-center justify-center mt-10">
          <Image
            src={ChrisSig}
            alt="Christine Dazzo"
            width={500}
            height={500}
          />
        </div>
        <h3 className="text-center max-w-3xl mx-auto !leading-7 text-3xl text-pink-400 p-4">
          Hi, my name is Christine! I am a marketing professional with expertise
          in brand management, digital strategy, and content creation. With
          experience in the wellness and hospitality industries, I have
          successfully led campaigns that drive customer engagement and brand
          visibility.
        </h3>
      </motion.div>
    </div>
  );
};

export default About;
