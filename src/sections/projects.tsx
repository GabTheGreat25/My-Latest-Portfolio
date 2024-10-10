"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import * as Mockup from "@/assets/images";
import { CheckCircle, ArrowUpRight } from "@/assets/icons";
import { SectionHeader, Card } from "@/components";

const portfolioProjects = [
  {
    company: "FreeTime",
    year: "Present",
    title: "Own Projects",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.OwnProjects,
  },
  {
    company: "Freelance",
    year: "2024",
    title: "E-Learning Platform",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.ELearning,
  },
  {
    company: "Freelance",
    year: "2024",
    title: "Quick Forms Api",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.QuickForms,
  },
  {
    company: "Thesis",
    year: "2024",
    title: "Lhanlee Beauty Lounge",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.LhanleeSalon,
  },
  {
    company: "School Project",
    year: "2023",
    title: "Camera Rental",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: Mockup.CameraRental,
  },
  {
    company: "School Project",
    year: "2023",
    title: "Final-Project-ITOS322-T",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: Mockup.VloggersTv,
  },
  {
    company: "Web 3 Hackathon",
    year: "2023",
    title: "BAUCHA Crypto Voucher",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.Baucha,
  },
  {
    company: "School Project",
    year: "2022",
    title: "Laravel Pet Care",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: Mockup.PetCare,
  },
  {
    company: "School Project",
    year: "2022",
    title: "Php Pet Clinic",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: Mockup.PetClinic,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Vloggers TV",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.Vloggers,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Maya CLI",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: Mockup.MayaCli,
  },
  {
    company: "Freelance",
    year: "202",
    title: "Yahu",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: Mockup.Yahu,
  },
  {
    company: "Freelance",
    year: "2022",
    title: "Promdi Farm",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Mockup.PromdiFarm,
  },
  {
    company: "School Project",
    year: "2022",
    title: "Basics of HTML",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: Mockup.BasicsOfHtml,
  },
  {
    company: "School Project",
    year: "2022",
    title: "TUP Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: Mockup.Tup,
  },
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const visibleProjects = showAll
    ? portfolioProjects
    : portfolioProjects.slice(0, 3);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleUndo = () => {
    setShowAll(false);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={sectionRef} className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {visibleProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pb-0 md:px-10 pt-8 md:pt-12 lg:pt-16 lg:px-20 sticky group"
              style={{
                top: `calc(64px + ${index * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-success-secondary to-info-default inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-light-default/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-light-default/50"
                      >
                        <CheckCircle className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-light-default text-dark-tertiary h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative lg:group-hover:scale-[1.075] group-hover:scale-105 md:-mb-[6.25rem] -mb-12 duration-700 ease-in-out">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
        {!showAll ? (
          <div className="flex items-center justify-center">
            <button
              onClick={handleViewMore}
              className="bg-primary-default text-light-default h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6"
            >
              <span className="tracking-widest text-xl font-semibold bg-gradient-to-r from-success-secondary to-info-default text-center text-transparent bg-clip-text hover:scale-110 duration-300 ease-in-out">
                View More
              </span>
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <button
              onClick={handleUndo}
              className="bg-secondary-default text-light-default h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6"
            >
              <span className="tracking-widest text-xl font-semibold bg-gradient-to-r from-success-secondary to-info-default text-center text-transparent bg-clip-text hover:scale-110 duration-300 ease-in-out">
                Show Less
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
