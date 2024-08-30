import React from "react";
import Link from "next/link";
import { partnersData } from "@/constants/partners-data";

export default function Partners() {
  return (
    <section
      className="mt-6 pt-6 text-center flex flex-col gap-14 px-5 xl:px-10 2xl:px-16"
      id={"parceiros"}
    >
      <h2 className="font-bold text-lg leading-5 text-yellow md:text-xl md:leading-8 lg:leading-normal xl:text-2xl">
        Parceiros que confiam no nosso trabalho
      </h2>
      <div className="w-full inline-flex flex-nowrap overflow-clip gap-3">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {partnersData.map((item, index) => {
            return (
              <li key={`${index}_${item.alt}`}>
                <img src={item.src} alt={item.alt} />
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {partnersData.map((item, index) => {
            return (
              <li key={`${index}_${item.alt}2`}>
                <img src={item.src} alt={item.alt} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="relative inline-block mb-14">
        <img
          src="/assets/bg/background.png"
          alt="Background"
          className="h-44 w-full rounded-xl"
        />
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-4 lg:gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-8 xl:px-16">
          <h4 className="font-bold text-white leading-5 md:text-start sm:text-xl sm:leading-normal lg:text-3xl xl:text-4xl">
            Procurando as melhores soluções de engenharia e segurança?
          </h4>
          <Link
            href="wa.link/8zg5r5"
            className="leading-5 bg-yellow p-4 flex rounded-lg text-white gap-4 font-bold w-fit md:w-96 text-center justify-center"
          >
            Entre em contato conosco
            <img
              src="/assets/icons/right-arrow.svg"
              alt="Icone: Flecha para direita"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
