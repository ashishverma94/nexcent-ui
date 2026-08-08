import Link from "next/link";
import Logo from "@/assets/icons/Logo.svg";
import SendIcon from "@/assets/icons/send.svg";
import { socialIcon, websiteLinks } from "@/data/data";

const Footer = () => {
  return (
    <div className="flex py-16 px-4 xl:px-41.25 gap-16 lg:gap-15 xl:gap-31.25 max-lg:items-center justify-center lg:justify-between flex-col lg:flex-row w-full bg-neutral-black">
      <div className="w-full max-w-87.5 max-lg:justify-center max-lg:items-center flex flex-col gap-10">
        <div className="flex items-center gap-2.5">
          <Logo className="w-10.75 h-7.5 text-[white]" />
          <span className="text-white font-semibold text-2xl">Nexcent</span>
        </div>
        <div className="flex flex-col gap-2 max-lg:text-center text-neutral-silver text-sm">
          <span>Copyright © 2020 Nexcent ltd.</span>
          <span>All rights reserved</span>
        </div>
        <div className="flex gap-4">
          {socialIcon.map((socialMedia) => {
            return (
              <Link
                key={socialMedia.name}
                href={socialMedia.href}
                className="hover:border-white border border-transparent rounded-full"
              >
                {socialMedia.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex gap-5 xl:gap-7.5 max-lg:items-center max-lg:justify-center flex-col md:flex-wrap lg:flex-nowrap lg:flex-row">
        {websiteLinks.map((links, index) => {
          return (
            <div
              key={index}
              className="flex max-lg:text-center flex-col gap-6 min-w-50"
            >
              <h3 className="font-semibold text-white text-[20px] leading-7">
                {links.heading}
              </h3>
              {links.subLinks.map((subLink, index2) => {
                return (
                  <Link
                    className="text-silver-neutral text-sm hover:underline"
                    key={index2}
                    href={subLink.href}
                  >
                    {subLink.name}
                  </Link>
                );
              })}
            </div>
          );
        })}

        <div className="flex max-lg:text-center max-lg:items-center flex-col gap-6">
          <h3 className="font-semibold text-white text-[20px] leading-7">
            Stay up to date
          </h3>

          <div className="flex h-10 w-full max-w-75 items-center rounded-lg bg-[#696666c2] px-3">
            <input
              type="email"
              placeholder="Your email address"
              className="xl:w-63.75 h-10 bg-transparent text-[#D9DBE1] text-sm outline-none"
            />

            <button type="button" className="shrink-0 cursor-pointer">
              <SendIcon className="size-4.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
