"use client";

import React from "react";
import { Star } from "@/assets/icons";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export function Tape() {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-success-secondary to-info-default  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {words.map((word) => (
              <div key={word} className="inline-flex gap-4 items-center">
                <span className="text-dark-default uppercase font-extrabold text-sm">
                  {word}
                </span>
                <Star className="size-6 text-dark-default -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
