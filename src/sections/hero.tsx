"use client";

import React from "react";
import Image from "next/image";
import { MemojiComputer, Grain } from "@/assets/images";
import { ArrowDown, Star, Sparkle } from "@/assets/icons";
import { HeroOrbit } from "@/components";

export function Hero() {
  return (
    <section className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${Grain.src})`,
          }}
        ></div>
        <div className="size-[620px] hero__ring"></div>
        <div className="size-[820px] hero__ring"></div>
        <div className="size-[1020px] hero__ring"></div>
        <div className="size-[1220px] hero__ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <Star className="size-28 text-success-secondary" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <Star className="size-12 text-success-secondary" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <Star className="size-8 text-success-secondary" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <Sparkle className="size-8 text-success-secondary/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <Sparkle className="size-5 text-success-secondary/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <Sparkle className="size-10 text-success-secondary/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144}>
          <Sparkle className="size-14 text-success-secondary/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 bg-success-secondary/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 bg-success-secondary/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 bg-success-secondary/20 rounded-full"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Image
            className="size-[100px]"
            src={MemojiComputer}
            alt="MemojiComputer"
          />
          <div className="bg-dark-tertiary border border-dark-default px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-success-default size-2.5 rounded-full "></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-light-default/60 md:text-lg">
              i specialize in transforming designs into functional,
              high-performing web applications. Let's discuss your next project.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
              <button className="inline-flex items-center gap-2 border border-light-default/15 px-6 h-12 rounded-xl">
                <span className="font-semibold">Explore My work</span>
                <ArrowDown className="size-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-light-default bg-white text-dark-default h-12 px-6 rounded-xl">
                <span>👋</span>
                <span className="font-semibold">Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
