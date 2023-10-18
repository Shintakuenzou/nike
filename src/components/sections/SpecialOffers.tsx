import { arrowRight } from "../../assets/icons";
import { offer } from "../../assets/images";
import { Button } from "../Button";

export function SpecialOffers() {
  return (
    <section className="padding">
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
          <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
        </div>

        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max-lg:max-w-lg">
            <span className="text-cyan-400">Special </span>
            Offer
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest
            expectations. Your journey with us is nothing short of exceptional.
          </p>

          <div className="mt-11 flex gap-4">
            <Button label="Shop now" iconUrl={arrowRight} />
            <Button
              label="Learn more"
              bgColor="bg-zinc-800"
              borderColor="border-slate-gray"
              textColor="text-zinc-300"
              iconUrl={arrowRight}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
