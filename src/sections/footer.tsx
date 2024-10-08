"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "@/assets/icons";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-success-secondary/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-light-default/15 sm:pb-6 pb-0 text-sm flex flex-col md:flex-row md:justify-between items-center gap-x-8">
          <div className="inline-flex items-center text-light-default/40">
            <Image src="/logo.png" alt="logo" width="100" height="100" />
            <span>&copy; 2024. All rights reserved.</span>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-5 lg:gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
