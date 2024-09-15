"use client";

import React, { useEffect } from "react";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Info from "@/components/Info";

const page = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <Works isSinglePage={false} />
      <Info />
      <Contact />
    </div>
  );
};

export default page;
