import { star } from "../assets/icons";

interface PopularProductsCardProps {
  imgURL: string;
  name: string;
  price: string;
}

export function PopularProductsCard({ imgURL, name, price }: PopularProductsCardProps) {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img className="w-[282px] h-[282px]" src={imgURL} alt={name} />

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="raiting" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-zinc-300">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-sky-300 text-2xl leading-normal">{price}</p>
    </div>
  );
}
