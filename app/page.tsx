import About from "@/components/About";
import Hero from "@/components/Hero";
import InstagramWorks from "@/components/InstagramInfo";
import LinkedInWork from "@/components/LinkedInWork";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-row justify-between px-5">
        <InstagramWorks />
        <LinkedInWork />
      </div>
      <Hero />
      {/* <About /> */}
    </main>
  );
}
