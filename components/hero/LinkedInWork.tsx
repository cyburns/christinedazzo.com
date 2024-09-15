import Link from "next/link";
import React from "react";

const LinkedInWork = () => {
  return (
    <div className="top-4 right-5 text-pink-400">
      <h2 className="capitalize text-[2rem] sm:text-[3.5rem] font-extraligh mb-[3.1rem] text-end hover:underline z-50">
        <a href="https://www.linkedin.com/in/christine-dazzo-92716b204/">
          LINKEDIN
        </a>
      </h2>
      <Link href="/works">
        <h1
          className="capitalize text-[6rem] sm:text-[9rem] font-semibold navigation-text -mt-10 sm:-mt-16 text-switch z-10 !leading-[0.9]"
          data-replace="WORK"
        >
          <span>WORK</span>
        </h1>
      </Link>
    </div>
  );
};

export default LinkedInWork;
