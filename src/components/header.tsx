import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-6 py-6 flex justify-between items-center">
      <img
        src="/logo.svg"
        alt="BDM Logo"
        className="w-36 h-6 md:w-44 md:h-10"
      />
      <img
        src="/assets/menu.svg"
        alt="Menu Icon"
        className="w-8 h-8 md:hidden"
      />
      <nav className="flex gap-8 items-center font-bold">
        <Link href="" className="">
          Ínicio
        </Link>
        <Link href="">Serviço</Link>
        <Link href="">Parceiros</Link>
      </nav>
    </header>
  );
}
