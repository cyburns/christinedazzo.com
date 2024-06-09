"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CanyonRanch from "@/public/images/CR_3_CD.jpeg";
import Exhale from "@/public/images/EXHALE_CD.jpeg";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spanClass = `${play.className} text-base xl:text-center`;

const words = [
  {
    name: "canyon ranch",
    body: "Instagram is a social media platform that allows users to share photos and videos with their followers. Users can also view, like, and comment on posts from other users. Instagram is a great way to connect with friends and family, as well as discover new content from creators around the world.",
    class: "bg-[#622d21] text-[5rem] text-center text-[#a45543] sticky top-32",
    image: CanyonRanch,
  },
  {
    name: "Exhlae spa",
    body: "LinkedIn is a professional networking platform that allows users to connect with other professionals in their industry. Users can create a profile that showcases their skills and experience, as well as connect with other users to build their network. LinkedIn is a great way to find job opportunities, share industry news, and connect with other professionals in your field.",
    class: "bg-[#9e9882] text-[5rem] text-center text-[#c4c5b0] sticky top-56",
    image: Exhale,
  },
  {
    name: "Facebook",
    body: "Facebook is a social media platform that allows users to connect with friends and family, share photos and updates, and discover new content from pages and groups. Users can also join events, play games, and shop on Facebook. Facebook is a great way to stay connected with the people you care about and discover new content from creators around the world.",
    class: "bg-[#6b9065] text-[5rem] text-center text-[#9dcf88] sticky  top-72",
    image: Exhale,
  },
];

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
            return (
              <motion.div
                ref={container}
                key={index}
                className={`${word.class} h-[100vh] w-[90vw] rounded-lg z-40 p-8 shadow-lg overflow-hidden`}
                style={{
                  scale,
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

          <div className="bg-pink-400 mb-96 flex justify-center items-center flex-col p-4  z-50 rounded-[5rem] sticky top-96 py-56">
            <h3
              className={`${spanClass} text-end text-green-800 text-[3rem] mb-24`}
            >
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
