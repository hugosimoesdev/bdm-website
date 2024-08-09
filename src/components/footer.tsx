import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div>
        <img
          src="/assets/logotipo/bdm-yellow.svg"
          alt="Logotipo amarelo da BDM"
        />
        <div>
          <Link href={""}>
            <img src="/assets/social-media/whatsapp" alt="" />
          </Link>
          <Link href={""}>
            <img src="/assets/social-media/instagram" alt="" />
          </Link>
          <Link href={""}>
            <img src="/assets/social-media/linkedin" alt="" />
          </Link>
        </div>
      </div>
      <div>
        <div>
          <h4>Contato</h4>
          <p>
            bdm.gestao.sso@gmail.com <br />
            19 98113-2698
          </p>
        </div>
        <div>
          <h4>Endereço</h4>
          <p>São Paulo - Campinas</p>
        </div>
      </div>
      <Separator />
      <p>BDM Engenharia @ 2024. Todos os direitos reservados.</p>
      <nav>
        <Link href={""}>Ínicio</Link>
        <Link href={""}>Serviços</Link>
        <Link href={""}>Parceiros</Link>
      </nav>
    </footer>
  );
}
