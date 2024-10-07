"use client";

import React from "react";

export function Header() {
  return (
    <section className="flex items-center justify-center fixed top-3 w-full z-[1000]">
      <nav className="flex gap-1 p-0.5 border border-light-shadow rounded-full bg-light-default/10 backdrop-blur">
        <a className="nav__link" href="#">
          Home
        </a>
        <a className="nav__link" href="#">
          Projects
        </a>
        <a className="nav__link" href="#">
          About
        </a>
        <a
          className="nav__link bg-light-default text-dark-default hover:bg-light-default/70 hover:text-dark-default"
          href="#"
        >
          Contact
        </a>
      </nav>
    </section>
  );
}
