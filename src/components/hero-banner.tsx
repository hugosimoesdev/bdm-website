import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section>
      <div className="text-center flex flex-col items-center gap-6 mt-8 px-7">
        <h1 className="text-2xl leading-7 font-bold text-dark-gray">
          Soluções de{" "}
          <span className="text-yellow">
            Engenharia e Segurança do Trabalho
          </span>
        </h1>
        <p className="text-sm text-dark-gray">
          Somos uma empresa com mais de 35 anos de experiência em engenharia,
          automação e segurança do trabalho, oferecendo soluções personalizadas
          e eficientes para diversas indústrias, sempre focados na otimização de
          processos e na segurança.
        </p>
        <Link
          href=""
          className="leading-5 bg-yellow p-4 flex w-fit rounded-lg text-white gap-4 font-bold"
        >
          Fale conosco
          <img
            src="/assets/icons/right-arrow.svg"
            alt="Icone: Flecha para direita"
          />
        </Link>
      </div>
      <img src="/assets/banner.png" alt="Banner BDM" />
    </section>
  );
}
