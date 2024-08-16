import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const data = [
  {
    alt: "Logotipo da Prema",
    src: "/assets/partners/prema.png",
  },
  {
    alt: "Logotipo do Grupo Paiva",
    src: "/assets/partners/grupo-paiva.png",
  },
  {
    alt: "Logotipo da CH7 Engenharia",
    src: "/assets/partners/ch7.png",
  },
];

export default function Partners() {
  return (
    <section
      className="shadow-md mt-14 text-center flex flex-col gap-14"
      id={"parceiros"}
    >
      <h2 className="font-bold text-lg leading-5 text-yellow">
        Parceiros que confiam <br />
        no nosso trabalho
      </h2>
      <div className="grid grid-cols-3 items-center px-5 gap-3">
        {data.map((item) => {
          return <img src={item.src} alt={item.alt} key={item.alt} />;
        })}
      </div>
      <div className="relative px-4 inline-block mb-14">
        <img
          src="/assets/rectangle.png"
          alt="Banner engenharia"
          className="w-full h-auto"
        />
        <div className="flex flex-col items-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <h4 className="font-bold text-white leading-5 w-full">
            Procurando as melhores soluções de engenharia e segurança?
          </h4>
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
      </div>
    </section>
  );
}
