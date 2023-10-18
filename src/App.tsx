import { Nav } from "./components/navigation/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscrible,
  Footer,
} from "./components/sections";

export function App() {
  return (
    <main className="relative bg-zinc-900 text-zinc-50">
    
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReviews />
      <Subscrible />
      <Footer />
    </main>
  );
}
