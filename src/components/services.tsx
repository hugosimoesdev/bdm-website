import React from "react";

const data = [
  {
    img: "/assets/project-manage.svg",
    title: "Gestão de Projetos",
    description:
      "Acompanhamento de serviços em obras civil, manutenção de telhados, instalação de linha de vida, processos de negociação para execução de serviços",
  },
  {
    img: "/assets/mech-projects.svg",
    title: "Projetos Mecânicos e Estruturaiss",
    description:
      "Planejamento e execução de projetos mecânicos e estruturais conforme especificações técnicas.",
  },
  {
    img: "/assets/maintenance.svg",
    title: "Montagem e Manutenção",
    description:
      "Montagem e manutenção de sistemas mecânicos, elétricos, eletrônicos e de automação.",
  },
  {
    img: "/assets/consulting.svg",
    title: "Consultoria em Segurança e Meio Ambiente",
    description:
      "Assessoria para adequação às normas de segurança do trabalho e meio ambiente.",
  },
  {
    img: "/assets/training.svg",
    title: "Treinamentos e Capacitações",
    description:
      "Programas de treinamento e capacitação para aumentar a eficiência e segurança no trabalho.",
  },
  {
    img: "/assets/risk-manage.svg",
    title: "Gestão de Riscos",
    description:
      "Análise e gestão de riscos para identificar perigos e implementar medidas preventivas.",
  },
];

export default function Services() {
  return (
    <section className="text-center mt-14" id={"servicos"}>
      <div className="flex flex-col gap-6 px-4">
        <h2 className="font-bold text-lg leading-5 text-yellow">
          Nossos serviços
        </h2>
        <h4 className="font-bold leading-5">
          Com nossa vasta experiência e dedicação, oferecemos uma ampla gama de
          serviços especializados para atender às necessidades especificas de
          cada cliente. Conheça nossos principais serviços:
        </h4>
      </div>
      <div className="grid grid-cols-6 gap-8 mt-20 px-6">
        {data.map((item) => {
          return (
            <div
              className="col-span-6 py-12 flex flex-col gap-4 text-center items-center bg-white px-6 shadow-md rounded-lg"
              key={item.img}
            >
              <img src={item.img} alt={item.title} />
              <h2 className="font-bold leading-5 text-lg">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
