import React from "react";
import { Button } from "./ui/button";

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
    <div>
      <h2>Parceiros que confiam no nosso trabalho</h2>
      <div>
        {data.map((item) => {
          return <img src={item.src} alt={item.alt} />;
        })}
      </div>
      <div>
        <img src="/assets/rectangle" alt="Banner engenharia" />
        <h4>Procurando as melhores soluções de engenharia e segurança?</h4>
        <Button>
          Fale conosco
          <img
            src="/assets/icons/right-arrow.svg"
            alt="Icone: Flecha para direita"
          />
        </Button>
      </div>
    </div>
  );
}
