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

  const workTextRef = useRef(null);
  const isWorkTextInView = useInView(workTextRef);
  const workControls = useAnimation();

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

    if (isWorkTextInView) {
      workControls.start("visible");
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
    isWorkTextInView,
    workControls,
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
    <div className="items-center justify-center bg-green-800!leading-[0.5] md:!leading-[0.7] pt-10 pb-56">
      <motion.div
        ref={largeTextRef}
        variants={textVariants}
        initial="hidden"
        animate={controls}
        viewport={{ once: true }}
      >
        <h1 className="text-center p-4 text-pink-400 text-[17vw] md:text-[18vw]">
          New York-BASED
        </h1>
        <h1 className="text-center p-4 text-pink-400 text-[14.2vw] md:text-[15vw]">
          DIRECTOR • Marking
        </h1>
        <h1 className="text-center p-4 text-pink-400 text-[14vw] md:text-[14.8vw]">
          CREATIVE DEVELOPER
        </h1>
      </motion.div>
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
          <div className="flex items-center justify-center">
            <p className="text-center p-4 text-pink-400">
              <span className={`${spanClass} text-center`}>
                CREATING STRONG BRANDS
              </span>
              <h2 className="text-center p-4 text-pink-400 text-3xl md:text-5xl max-w-xs">
                BRAND IDENTITY BRAND STRATEGY TYPOGRAPHY
              </h2>
            </p>
          </div>
          <Lottie options={lottieOptions} height={500} width={500} />
          <div className="flex items-center justify-center">
            <p className="text-center p-4 text-pink-400">
              <span className={`${spanClass} text-center`}>
                DEVELOPING DIGITAL PRODUCTS
              </span>
              <h2 className="text-center p-4 text-pink-400 text-3xl md:text-5xl max-w-xs">
                ART DIRECTION DIGITAL DESIGN DEVELOPMENT
              </h2>
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
          I'M CHRISTINE, A FREELANCE ART DIRECTOR, VISUAL DESIGNER, CREATIVE
          DEVELOPER AND HOUSEPLANT ENTHUSIAST BASED IN NYC. I WORK WITH BRANDS
          OF ALL SIZES, ACROSS ALL INDUSTRIES, IN EVERY CORNER OF THE WORLD.,
          CREATING MEMORABLE BRANDS AND DIGITAL PRODUCTS THAT RESONATE WITH
          THEIR AUDIENCE. I BELIEVE THAT STORIES TOLD AUTHENTICALLY & VISUALLY
          ARE MORE EFFECTIVE AT CAPTIVATING AUDIENCES, EVOKING EMOTION AND
          IMPROVING CONVERSION.
        </h3>
      </motion.div>

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate={workControls}
        viewport={{ once: true }}
        ref={workTextRef}
        className="bg-pink-400 rounded-[10rem] mx-16"
      >
        <h1 className="text-green-900 text-center mt-32 text-[40vw] underline py-32">
          WORK
        </h1>
      </motion.div>
    </div>
  );
};

export default About;
