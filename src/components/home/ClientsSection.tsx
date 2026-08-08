import Image from "next/image";
import { clientsIcons } from "@/data/data";
import SectionHeader from "../common/SectionHeader";

const ClientsSection = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col gap-4">
      <SectionHeader
        title="Our Clients"
        description="We have been working with some Fortune 500+ clients"
      />
      <div className="w-full overflow-hidden">
        <div className="flex w-max shrink-0 flex-nowrap items-center gap-16 md:gap-30 animate-client-scroll client-carousel h-24.5">
          {[...clientsIcons, ...clientsIcons].map((icon, index) => (
            <Image
              key={`${icon.name}-${index}`}
              src={icon.url}
              alt={icon.name}
              width={48}
              height={48}
              loading="eager"
              priority={index < clientsIcons.length}
              className="size-12 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
