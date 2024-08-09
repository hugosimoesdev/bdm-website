import React from "react";

const data = [
  {
    img: "/assets/clients.svg",
    number: "250+",
    title: "Clientes felizes",
    alt: "SVG de Trabalhadores",
  },
  {
    img: "/assets/projects.svg",
    number: "600+",
    title: "Projetos conclúidos",
    alt: "SVG de Capacete",
  },
  {
    img: "/assets/risk.svg",
    number: "150+",
    title: "Análises de risco RN12",
    alt: "SVG de Capacete",
  },
  {
    img: "/assets/diagnostic.svg",
    number: "200+",
    title: "Diagnósticos de serviços em altura NR35",
    alt: "SVG de Folha de Tarefas",
  },
];

export default function Results() {
  return (
    <section>
      <h2>Resultados que falam por nós</h2>
      <div>
        {data.map((item) => {
          return (
            <div>
              <img src={item.img} alt={item.alt} />
              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
