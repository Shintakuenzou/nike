import { Button } from "../Button";

export function Subscrible() {
  return (
    <section className="padding-x sm:py-32 py-16 w-full">
      <section
        className="max-container flex justify-between items-center max-lg:flex-col gap-10"
        id="contact-us"
      >
        <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
          Sign Up For <span className="text-cyan-400">Updates</span> & Newsletter
        </h3>

        <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-cyan-300 rounded-full">
          <input type="text" placeholder="subscrible@nike.com" className="input bg-zinc-800 p-4 rounded-full" />
          <div className="flex max-sm:justify-end items-center max-sm:w-full">
            <Button label="Sign Up" fullWidth />
          </div>
        </div>
      </section>
    </section>
  );
}
