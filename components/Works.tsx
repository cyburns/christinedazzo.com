"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { words } from "@/lib/data";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spanClass = `${play.className} xl:text-center text-xl lg:text-3xl`;

const Works = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progress = scrollYProgress;

  return (
    <div className="relative mb-10">
      <div className="sticky top-[-14rem] justify-center items-center">
        <h1 className="text-pink-400 text-center text-[40vw] underline">
          WORK
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center z-30 relative">
        <ul
          className="space-y-8 flex flex-col items-center justify-center"
          ref={ref}
        >
          {words.map((word: any, index: number) => {
            const targetScale = 1 - (words.length - index) * 0.15;
            const container = useRef(null);
            const scale = useTransform(
              progress,
              [index * 0.25, 1],
              [1, targetScale]
            );
            const y = useTransform(progress, [index * 0.25, 1], [0, -300]);

            return (
              <motion.div
                ref={container}
                key={index}
                className={`${word.class} h-[100vh] w-[90vw] rounded-lg z-40 p-8 shadow-lg overflow-hidden`}
                style={{
                  scale,
                  y,
                }}
              >
                <li>
                  <h1 className="font-bold md:text-[5rem] lg:text-[8rem] -mt-10 -mb-10">
                    {word.name}
                  </h1>
                  {/* <p className="text-xl">{word.body}</p> */}
                  <motion.div className="mx-auto mt-4 overflow-hidden">
                    <Image
                      src={word.image}
                      alt={word.name}
                      className="object-cover h-[60%] mx-auto"
                    />
                  </motion.div>
                </li>
              </motion.div>
            );
          })}

          <div className="bg-pink-400 mb-96 flex justify-center items-center flex-col p-4  z-50 rounded-[5rem] sticky top-0 py-56">
            <h3 className={`${spanClass} text-end text-green-800 mb-24`}>
              More about me
            </h3>
            <h1 className="text-green-800 text-center text-[6vw] !leading-[0.8] ">
              AS ARTIFICIAL INTELLIGENCE BECOMES A BUZZWORD FOR REPLACING HUMAN
              ABILITY, IT’S MORE IMPORTANT THAN EVER TO TELL YOUR STORY IN AN
              AUTHENTIC WAY
            </h1>
            <h3
              className={`text-green-800 text-xl lg:text-3xl font-thin text-center max-w-3xl mt-10`}
            >
              WORKING
              <span className={`${spanClass} text-end`}> WITH </span>
              PASSIONATE PEOPLE
              <span className={`${spanClass} text-end`}> & </span>
              DISRUPTORS
              <span className={`${spanClass} text-end`}>
                {" "}
                TO CREATE MEMORABLE{" "}
              </span>
              BRANDS
              <span className={`${spanClass} text-end`}> & CAPTIVATING </span>
              DIGITAL EXPERIENCES
              <span className={`${spanClass} text-end`}> THAT DELIVER </span>
              RESULTS
            </h3>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Works;
