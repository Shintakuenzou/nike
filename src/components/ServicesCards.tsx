interface ServicesCardsProps {
  imgURL: string;
  label: string;
  subtext: string;
}

export function ServicesCards({ imgURL, label, subtext }: ServicesCardsProps) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl shadow-sky-950 px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-sky-600 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-zinc-300">{subtext}</p>
    </div>
  );
}
