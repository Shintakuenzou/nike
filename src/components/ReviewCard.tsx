import { star } from "../assets/icons";

interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

export function ReviewCard({ imgURL, customerName, rating, feedback }: ReviewCardProps) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full border-2 border-cyan-400 object-cover w-[120px] hover:-[120px]"
      />
      <p className="mt-6 max-w-sm text-center text-zinc-300">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star icon" width={24} height={24} className="object-contain m-0" />
        <p className="text-zinc-300 text-xl font-montserrat">({rating})</p>
      </div>
      <h3 className="mt-1 font-bold font-palanquin text-center text-3xl">{customerName}</h3>
    </div>
  );
}
