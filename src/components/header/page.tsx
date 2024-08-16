import React from "react";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="px-6 py-6 xl:px-20 flex justify-between items-center">
      <img
        src="/logo.svg"
        alt="BDM Logo"
        className="w-36 h-6 md:w-44 md:h-10 2xl:w-52"
      />
      <img
        src="/assets/menu.svg"
        alt="Menu Icon"
        className="w-8 h-8 md:hidden"
      />
      <Navigation />
    </header>
  );
}
