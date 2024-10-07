import React from "react";
import { twMerge } from "tailwind-merge";
import { Star } from "@/assets/icons";

export function CardHeader({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
      <div className="inline-flex items-center gap-2">
        <Star className="size-9 text-success-secondary" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base text-light-default/60 mt-2">
        {description}
      </p>
    </div>
  );
}
