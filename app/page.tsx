"use client";

import { useEffect, useState } from "react";
import About from "@/components/About";
import Works from "@/components/Works";
import Hero from "@/components/hero/Hero";
import Contact from "@/components/Contact";
import Info from "@/components/Info";
import SplashScreen from "@/components/SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();

    setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen />}
      </AnimatePresence>
      <Hero />
      <About />
      <Works isSinglePage />
      <Info />
      <Contact />
    </main>
  );
}
