import { services } from "../../constants";
import { ServicesCards } from "../ServicesCards";

export function Services() {
  return (
    <section className="padding-x py-10">
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service, index) => {
          return <ServicesCards key={index} {...service} />;
        })}
      </section>
    </section>
  );
}
