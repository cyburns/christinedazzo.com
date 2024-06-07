"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  {
    name: "Instagram",
    body: "Instagram is a social media platform that allows users to share photos and videos with their followers. Users can also view, like, and comment on posts from other users. Instagram is a great way to connect with friends and family, as well as discover new content from creators around the world.",
    class: "bg-[#622d21] text-[5rem] text-center text-[#a45543] sticky top-32",
  },
  {
    name: "LinkedIn",
    body: "LinkedIn is a professional networking platform that allows users to connect with other professionals in their industry. Users can create a profile that showcases their skills and experience, as well as connect with other users to build their network. LinkedIn is a great way to find job opportunities, share industry news, and connect with other professionals in your field.",
    class: "bg-[#9e9882] text-[5rem] text-center text-[#c4c5b0] sticky top-56",
  },
  {
    name: "Facebook",
    body: "Facebook is a social media platform that allows users to connect with friends and family, share photos and updates, and discover new content from pages and groups. Users can also join events, play games, and shop on Facebook. Facebook is a great way to stay connected with the people you care about and discover new content from creators around the world.",
    class: "bg-[#6b9065] text-[5rem] text-center text-[#9dcf88] sticky  top-72",
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
    <div className="relative mb-[100vh] ">
      <div className="sticky top-[-14rem] justify-center items-center">
        <h1 className="text-pink-400 text-center text-[40vw] underline">
          WORK
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center z-30 relative ">
        <ul className="space-y-8" ref={ref}>
          {words.map((word: any, index: number) => {
            const targetScale = 1 - (words.length - index) * 0.05;
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
                  <h1 className="font-bold mb-4 md:text-[5rem] lg:text-[8rem]">{word.name}</h1>
                  <p className="text-xl">{word.body}</p>
                </li>
              </motion.div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Works;
