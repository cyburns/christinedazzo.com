"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Contact from "@/components/Contact";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <About />
    </div>
  );
};

export default page;
