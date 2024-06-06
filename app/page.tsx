import Hero from "@/components/Hero";
import InstagramWorks from "@/components/InstagramWorks";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <InstagramWorks />
    </main>
  );
}
