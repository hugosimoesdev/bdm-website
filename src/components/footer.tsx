import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="py-14 px-4 md:px-10 lg:px-16 bg-[#05172D] flex flex-col gap-8 text-white">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-10 items-start sm:items-center">
        <img src="/assets/logos/bdm-yellow.svg" alt="Logotipo amarelo da BDM" />
        <div className="flex gap-4">
          <Link href={"https://w.app/bdmgestao"}>
            <img src="/assets/socials/whatsapp.svg" alt="Whatsapp" />
          </Link>
          <Link href={"https://www.instagram.com/bdm.gestaoenegocios/"}>
            <img src="/assets/socials/instagram.svg" alt="Instagram" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/paulo-sim%C3%B5es-9037291a/"}
          >
            <img src="/assets/socials/linkedin.svg" alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div className="flex flex-col gap-2">
          <h4 className="leading-6 opacity-70">Contato</h4>
          <p className="text-sm leading-5">
            contato@bdmgestao.com.br <br />
            +55 (19) 98113-2698
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="leading-6 opacity-70">Endereço</h4>
          <p className="text-sm leading-5">São Paulo - Campinas</p>
        </div>
      </div>
      <div className="bg-white h-0.5 w-full rounded-full" />
      <div className="flex flex-col gap-6 sm:flex-row sm:justify-between">
        <p className="text-xs">
          BDM Gestão & Negócios @ 2024. Todos os direitos reservados.
        </p>
        <nav className="text-xs text-[#C1C7CD] flex gap-8">
          <Link href={"#inicio"}>Ínicio</Link>
          <Link href={"#servicos"}>Serviços</Link>
          <Link href={"#parceiros"}>Parceiros</Link>
        </nav>
      </div>
    </footer>
  );
}
