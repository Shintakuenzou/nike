import { shoe8 } from "../../assets/images";
import { Button } from "../Button";

export function SuperQuality() {
  return (
    <section
      className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      id="about-us"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold max-lg:max-w-lg">
          We Provide You <span className="text-cyan-400">Super </span>
          <span className="text-cyan-400">Quality </span>
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg text-zinc-300">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your
          experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 max-w-lg text-zinc-300">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button label="Show now" />
        </div>
      </div>

      <div className="flex-1 justify-center items-center">
        <img className="object-contain" src={shoe8} alt="Super Quality shoes" width={570} height={520} />
      </div>
    </section>
  );
}
