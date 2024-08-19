import React from "react";
import { resultsData } from "@/constants/results-data";

export default function Results() {
  return (
    <section className="py-14 text-center">
      <div className="relative">
        <img
          src="/assets/bg/background.png"
          className="h-[530px] lg:h-[315px] w-full"
        />
        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full 2xl:px-20">
          <h2 className="text-lg lg:text-xl font-bold leading-5 text-yellow mb-8">
            Resultados que falam por nós
          </h2>
          <div className="grid grid-cols-2 xl:grid-cols-4 justify-center items-center px-6 gap-8">
            {resultsData.map((item) => {
              return (
                <div
                  className="flex flex-col xl:flex-row items-center gap-4"
                  key={item.title}
                >
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
        </div>
      </div>
    </section>
  );
}
