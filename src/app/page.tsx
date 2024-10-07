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
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
