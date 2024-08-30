import React from "react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section id="home" className="-mb-14">
      <img
        src="/assets/icons/caminhao.svg"
        alt="Desenho de Trator"
        className="hidden lg:block lg:w-44 lg:h-44 xl:w-64 xl:h-64 opacity-50"
      />
      <div className="lg:flex items-center lg:-mt-44 xl:-mt-64">
        <div className="text-center lg:text-start flex flex-col items-center lg:items-start gap-6 mt-8 px-7 xl:pl-20 2xl:pl-24">
          <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-7 font-bold text-dark-gray">
            Soluções de{" "}
            <span className="text-yellow">
              Engenharia e Segurança do Trabalho.
            </span>
          </h1>
          <p className="text-sm xl:text-base 2xl:text-lg text-dark-gray">
            Somos uma empresa com mais de 35 anos de experiência em engenharia,
            automação e segurança do trabalho, oferecendo soluções
            personalizadas e eficientes para diversas indústrias, sempre focados
            na otimização de processos e na segurança.
          </p>
          <Link
            href="wa.link/8zg5r5"
            className="leading-5 bg-yellow p-4 flex w-fit lg:w-[50%] justify-center rounded-lg text-white gap-4 font-bold"
          >
            <span className="xl:hidden">Fale conosco</span>
            <span className="hidden xl:flex">Entre em contato conosco</span>
            <img
              src="/assets/icons/right-arrow.svg"
              alt="Icone: Flecha para direita"
            />
          </Link>
        </div>
        <img
          src="/assets/banner.png"
          alt="Banner BDM"
          className="lg:w-[50%] xl:w-[45%] 2xl:w-[40%] md:-mt-28 lg:mt-0 overflow-clip"
        />
      </div>
    </section>
  );
}
