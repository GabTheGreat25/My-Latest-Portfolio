import React from "react";

export function TechIcons({ component }: { component: React.ElementType }) {
  const Component = component;

  return (
    <React.Fragment>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 188 246)" />
        </linearGradient>
      </svg>
    </React.Fragment>
  );
}
