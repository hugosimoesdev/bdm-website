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
    <section className="bg-[#05172D] py-14 text-center">
      <h2 className="text-lg font-bold leading-5 text-yellow mb-8">
        Resultados que falam por nós
      </h2>
      <div className="grid grid-cols-2 justify-center items-center px-6 gap-8">
        {data.map((item) => {
          return (
            <div className="flex flex-col items-center gap-4" key={item.title}>
              <img src={item.img} alt={item.alt} />
              <div className="flex flex-col items-center text-white text-center">
                <h3 className="text-xl font-bold leading-normal">
                  {item.number}
                </h3>
                <h4 className="leading-6">{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
