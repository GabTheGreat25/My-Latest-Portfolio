"use client";

import React from "react";
import {
  Header,
  Hero,
  Projects,
  Tape,
  Testimonials,
  About,
  Contact,
  Footer,
} from "@/sections";

export default function Home() {
  const [activeLink, setActiveLink] = React.useState("#home");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <main>
      <Header activeLink={activeLink} handleLinkClick={handleLinkClick} />
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Tape />
      <Testimonials />
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer handleLinkClick={handleLinkClick} />
    </main>
  );
}
