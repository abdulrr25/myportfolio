import About from "@/components/about";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}
