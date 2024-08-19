import React from "react";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section id="home">
      <img
        src="/assets/icons/caminhao.svg"
        alt="Desenho de Trator"
        className="hidden lg:block lg:w-44 lg:h-44 xl:w-64 xl:h-64"
      />
      <div className="lg:flex items-center lg:-mt-44 xl:-mt-56 2xl:-mt-72">
        <div className="text-center lg:text-start flex flex-col items-center lg:items-start gap-6 mt-8 px-7 xl:pl-20 2xl:pl-24">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl 2xl:text-6xl leading-7 font-bold text-dark-gray">
            Soluções de{" "}
            <span className="text-yellow">
              Engenharia e Segurança do Trabalho.
            </span>
          </h1>
          <p className="text-sm xl:text-lg 2xl:text-xl text-dark-gray">
            Somos uma empresa com mais de 35 anos de experiência em engenharia,
            automação e segurança do trabalho, oferecendo soluções
            personalizadas e eficientes para diversas indústrias, sempre focados
            na otimização de processos e na segurança.
          </p>
          <Link
            // TODO: Colocar o link do whatsapp com mensagem.
            href=""
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
          className="lg:w-[40%] xl:pr-4 -mt-14 sm:-mt-24 md:mt-0"
        />
      </div>
    </section>
  );
}
