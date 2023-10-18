import headerLogo from "../../assets/images/header-logo.svg";
import hamburger from "../../assets/icons/hamburger.svg";

import { navLinks } from "../../constants";
export function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo Nike" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((navLink) => {
            return (
              <li key={navLink.label}>
                <a className="font-montserrat leading-normal text-lg text-zinc-300" href={navLink.href}>
                  {navLink.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden max-lg:block text-coral-red">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}
