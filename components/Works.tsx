"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { words } from "@/lib/data";

const Works = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        style={{
          y: backgroundY,
          scale: headingScale,
        }}
        transition={{
          type: "ease",
          damping: 25,
          stiffness: 400,
        }}
        ref={ref}
        className="bg-pink-400 rounded-[10rem] mx-16 z-10 sticky top-0"
      >
        <motion.h1
          style={{
            scale: headingScale,
          }}
          className="text-green-900 text-center mt-24 text-[40vw] underline"
        >
          WORK
        </motion.h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center z-30 relative mt-[calc(40vw + 2rem)]">
        <ul className="space-y-8">
          {words.map((word, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`${word.class} w-[90vw] rounded-lg z-40 bg-white p-8 shadow-lg`}
            >
              <li className="text-3xl font-bold mb-4">{word.name}</li>
              <p className="text-xl">{word.body}</p>
            </motion.div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Works;
