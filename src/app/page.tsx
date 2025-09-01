import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
    </main>
  );
}
