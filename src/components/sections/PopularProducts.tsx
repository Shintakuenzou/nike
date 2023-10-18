import { products } from "../../constants";
import { PopularProductsCard } from "../PopularProductsCard";

export function PopularProducts() {
  return (
    <section id="products" className="padding max-container max-sm:mt-12 max-sm:flex max-sm:items-center max-sm:flex-col">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-montserrat font-bold">
          Our <span className="text-sky-400">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-zinc-300">
          Experience top notch quality and style with our sought after selections. Discover a world of
          comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => {
          return <PopularProductsCard key={product.name} {...product} />;
        })}
      </div>
    </section>
  );
}
