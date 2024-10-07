"use client";

import React from "react";
import { ArrowUpRight } from "@/assets/icons";
import { Grain } from "@/assets/images";

export function Contact() {
  return (
    <section className="pb-16 pt-12 lg:pb-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-success-secondary to-info-default text-dark-variant py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${Grain.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achiece your goals.
              </p>
            </div>
            <div>
              <button className="text-light-default bg-dark-variant inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-dark-variant">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
