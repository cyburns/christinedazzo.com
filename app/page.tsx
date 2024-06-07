"use client";

import { useEffect } from "react";
import About from "@/components/About";
import Works from "@/components/Works";
import Hero from "@/components/hero/Hero";
import Contact from "@/components/Contact";
import Info from "@/components/Info";

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
      <Info />
      <Contact />
    </main>
  );
}
