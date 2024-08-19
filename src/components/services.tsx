import { servicesData } from "@/constants/services-data";
import React from "react";

export default function Services() {
  return (
    <section className="text-center mt-14" id={"servicos"}>
      <div className="flex flex-col gap-6 px-4 2xl:px-32">
        <h2 className="font-bold text-lg xl:text-xl leading-5 text-yellow">
          Nossos serviços
        </h2>
        <h4 className="font-bold leading-5 lg:text-2xl xl:text-3xl">
          Com nossa vasta experiência e dedicação, oferecemos uma ampla gama de
          serviços especializados para atender às necessidades especificas de
          cada cliente. Conheça nossos principais serviços:
        </h4>
      </div>
      <div className="xl:relative mt-12">
        <img src="assets/icons/circle.svg" className="hidden xl:block" />
        <div className="grid grid-cols-6 gap-8 mt-20 px-6 xl:absolute xl:top-[35%] xl:left-1/2 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 xl:w-full 2xl:px-32">
          {servicesData.map((item) => {
            return (
              <div
                className="col-span-6 sm:col-span-3 lg:col-span-2 py-12 flex flex-col gap-4 lg:text-start text-center lg:items-start items-center bg-white px-6 shadow-md rounded-lg"
                key={item.img}
              >
                <img src={item.img} alt={item.title} />
                <h2 className="font-bold leading-5 text-lg">{item.title}</h2>
                <p className="text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
