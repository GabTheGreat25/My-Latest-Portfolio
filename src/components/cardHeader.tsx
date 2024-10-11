import React from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "@/assets/icons";

export function CardHeader({
  title,
  description,
  className,
  isHovered,
}: {
  title: string;
  description: string;
  className?: string;
  isHovered?: boolean;
}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <Star
          className={twMerge(
            "size-9 text-success-secondary transition-transform duration-300",
            isHovered ? "rotate-45 duration-500 ease-in-out" : "",
          )}
        />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-base text-light-default/60 mt-2">{description}</p>
    </div>
  );
}
