import { useState } from "react";

import { Button } from "../Button";
import { ShoesCards } from "../ShoesCards";

import { shoes, statistics } from "../../constants";

import { arrowRight } from "../../assets/icons";
import { bigShoe1 } from "../../assets/images";

export function Hero() {
  const [bigShoesImg, setBigShoesImg] = useState(bigShoe1);
  return (
    <section className="xl:padding-l wide:padding-r padding-b">
      <section
        id="home"
        className="w-full flex flex-col justify-center xl:flex-row gap-10 max-container p-2 min-h-screen"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 max-sm:items-center">
          <p className="text-xl font-montserrat text-cyan-300">Our Summer collections</p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
            <span className="xl:bg-zinc-900 xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
            <br />
            <span className="text-cyan-400 inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-zinc-300 text-lg leading-8 mt-6 mb-14 sm:max-w-sm max-sm:text-base">
            Discover stylish Nike arrivals, quality comfort, and innovation for you active life.
          </p>
          <Button label="Show now" iconUrl={arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20 max-sm:justify-center">
            {statistics.map((statistic, index) => {
              return (
                <div key={index}>
                  <p className="text-4xl font-palanquin font-bold">{statistic.value}</p>
                  <p className="leading-7 font-montserrat text-zinc-300">{statistic.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 
          bg-zinc-800 bg-cover bg-center"
        >
          <img
            src={bigShoesImg}
            alt="Shoe collection"
            width={510}
            height={400}
            className="object-contain relative z-10"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
            {shoes.map((shoe, index) => (
              <div key={index}>
                <ShoesCards
                  imgUrl={shoe}
                  changeBigShoesImage={(shoe) => setBigShoesImg(shoe)}
                  bigShoesImage={bigShoesImg}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
