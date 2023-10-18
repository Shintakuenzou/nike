import { reviews } from "../../constants";
import { ReviewCard } from "../ReviewCard";

export function CustomerReviews() {
  return (
    <section className="padding bg-zinc-800 padding">
      <section className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our 
          <span className="text-cyan-400"> Customers </span>
          Spay?
        </h3>
        <p className="text-zinc-300 m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => {
            return <ReviewCard key={index} {...review} />;
          })}
        </div>
      </section>
    </section>
  );
}
