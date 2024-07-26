import React from "react";
import { Playfair_Display } from "next/font/google";

const play = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Contact = () => {
  const spanClass = `${play.className} text-base xl:text-center`;

  return (
    <div className=" mb-96 flex justify-center items-center flex-col p-4 relative mt-24">
      <h1 className="text-pink-400 text-center text-[14vw] md:text-[16vw] !leading-[0.8]">
        LET'S COLLABORATE
      </h1>
      <h3
        className={`text-pink-400 text-xl lg:text-5xl font-thin text-center max-w-3xl mt-10`}
      >
        AUTHENTIC STORIES
        <span className={`${spanClass} text-end`}> of </span>
        CREATION
        <span className={`${spanClass} text-end`}> & </span>
        CREATIVITY
      </h3>
      <div className="relative mt-[100px] h-[50px] bg-yellow-300">
        <div className="absolute bottom-0 left-0 w-full h-full bg-yellow-300" />
      </div>
    </div>
  );
};

export default Contact;
