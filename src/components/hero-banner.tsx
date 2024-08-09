import React from "react";
import { Button } from "./ui/button";

export default function HeroBanner() {
  return (
    <div>
      <div>
        <h1>
          Soluções de <span>Engenharia e Segurança do Trabalho</span>
        </h1>
        <p>
          Somos uma empresa com mais de 35 anos de experiência em engenharia,
          automação e segurança do trabalho, oferecendo soluções personalizadas
          e eficientes para diversas indústrias, sempre focados na otimização de
          processos e na segurança.
        </p>
        <Button>
          Fale conosco
          <img
            src="/assets/icons/right-arrow.svg"
            alt="Icone: Flecha para direita"
          />
        </Button>
      </div>
      <img src="/assets/banner.png" alt="Banner BDM" />
    </div>
  );
}
