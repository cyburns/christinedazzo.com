import About from "@/components/About";
import Works from "@/components/Works";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <About />
      <Works />
    </main>
  );
}
