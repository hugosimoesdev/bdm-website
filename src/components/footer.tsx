import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="py-14 px-4 bg-[#05172D] flex flex-col gap-8 text-white">
      <div>
        <img src="/assets/logos/bdm-yellow.svg" alt="Logotipo amarelo da BDM" />
        <div>
          <Link href={""}>
            <img src="/assets/socials/whatsapp.svg" alt="Whatsapp" />
          </Link>
          <Link href={""}>
            <img src="/assets/socials/instagram.svg" alt="Instagram" />
          </Link>
          <Link href={""}>
            <img src="/assets/socials/linkedin.svg" alt="Linkedin" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="leading-6 opacity-70">Contato</h4>
        <p className="text-sm leading-5">
          bdm.gestao.sso@gmail.com <br />
          +55 (19) 98113-2698
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="leading-6 opacity-70">Endereço</h4>
        <p className="text-sm leading-5">São Paulo - Campinas</p>
      </div>
      <div className="bg-white h-0.5 w-full rounded-full" />
      <p className="text-xs">
        BDM Engenharia @ 2024. Todos os direitos reservados.
      </p>
      <nav className="text-xs text-[#C1C7CD] flex gap-8">
        <Link href={""}>Ínicio</Link>
        <Link href={""}>Serviços</Link>
        <Link href={""}>Parceiros</Link>
      </nav>
    </footer>
  );
}
