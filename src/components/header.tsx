import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="px-6 py-6 flex justify-between items-center">
      <Image src="/logo.svg" alt="BDM Logo" width={116} height={22} />
      <Image src="/assets/menu.svg" alt="Menu Icon" width={32} height={32} />
    </header>
  );
}
