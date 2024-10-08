import Link from "next/link";
import React from "react";

const InstagramInfo = () => {
  return (
    <div className="top-4 right-5 text-pink-400">
      <h2 className="capitalize text-[2rem] sm:text-[3.5rem] font-extraligh mb-[3.1rem]  hover:underline z-50">
        <a href="https://www.instagram.com/christinedazzo/">INSTAGRAM</a>
      </h2>
      <Link href="/info">
        <h1
          className="capitalize text-[6rem] sm:text-[9rem] font-semibold navigation-text -mt-10 sm:-mt-16 text-switch z-10 !leading-[0.9]"
          data-replace="INFO"
        >
          <span>INFO</span>
        </h1>
      </Link>
    </div>
  );
};

export default InstagramInfo;
