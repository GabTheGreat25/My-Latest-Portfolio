"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader, Card, CardHeader, ToolboxItems } from "@/components";
import * as Icon from "@/assets/icons";
import { BookCover, Map, MemojiSmile } from "@/assets/images";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: Icon.Javascript,
  },
  {
    title: "HTML5",
    iconType: Icon.HTML5,
  },
  {
    title: "CSS3",
    iconType: Icon.CSS3,
  },
  {
    title: "React",
    iconType: Icon.ReactIcon,
  },
  {
    title: "Chrome",
    iconType: Icon.Chrome,
  },
  {
    title: "Github",
    iconType: Icon.Github,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "👟",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏋",
    left: "5%",
    top: "65%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "45%",
    top: "70%",
  },
];

export function About() {
  const constraintsRef = React.useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0 relative group pointer-events-none">
                <div className="absolute rounded-full h-[400px] w-[600px] bottom-0 left-1/2 -translate-x-1/2 bg-success-secondary/70 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10 transition-all duration-500 ease-in-out sm:group-hover:h-[500px] md:group-hover:h-[520px] group-hover:w-[700px] group-hover:bg-success-secondary/85"></div>
                <Image
                  src={BookCover}
                  alt="Book Cover"
                  className="sm:hover:-translate-y-1 hover:translate-y-3 transition-transform duration-500 ease-in-out hover:scale-110 relative z-10 pointer-events-auto"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolBoxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:20s] hover:[animation-play-state:paused]"
              />
              <ToolboxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="p-6"
              />
              <div className="relative flex-1" ref={constraintsRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-success-secondary to-info-default rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintsRef}
                  >
                    <span className="font-medium text-dark-tertiary">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={Map}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-dark-tertiary/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-success-secondary to-info-default -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-success-secondary to-info-default -z-10"></div>
                <Image
                  src={MemojiSmile}
                  alt="Memoji Smile"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
