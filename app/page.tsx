"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Works from "@/components/Works";
import Hero from "@/components/hero/Hero";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="">
      <Hero />
      <About />
      <Works />
    </main>
  );
}
