import React from "react";

export function SectionHeader({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-success-secondary to-info-default text-center text-transparent bg-clip-text">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl max-w-md mx-auto text-light-default/60 mt-4">
        {description}
      </p>
    </React.Fragment>
  );
}
