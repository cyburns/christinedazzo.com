import About from "@/components/About";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <About />
    </main>
  );
}
