import Link from "next/link";
import { navLinks } from "@/data/data";
import Logo from "@/assets/icons/Logo.svg";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="lg:flex bg-silver-neutral hidden justify-center w-full">
      <div className="w-full px-10 max-w-360 h-21 flex justify-between items-center">
        <Link href={"/"} className="flex flex-row gap-2 items-center">
          <Logo className="w-8.5 h-6 text-brand-secondary!" />
          <span className="text-brand-secondary font-bold text-2xl">
            Nexcent
          </span>
        </Link>
        <div className="flex flex-row gap-6 xl:gap-12.5">
          {navLinks.map((link) => {
            return (
              <Link key={link.name} href={link.href} className="group relative">
                <span className="text-base text-neutral-d-gray">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            );
          })}
        </div>
        <div className="flex gap-3.5">
          <Button variant={"secondary"}>Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
