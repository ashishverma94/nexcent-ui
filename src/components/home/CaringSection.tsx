import { caringData } from "@/data/data";
import SectionHeader from "../common/SectionHeader";
import Image, { StaticImageData } from "next/image";
import RightArrow from "@/assets/icons/right-arrow.svg";

const CaringSection = () => {
  return (
    <div className="w-full px-4 xl:px-0 flex flex-col gap-4">
      <SectionHeader
        title="Caring is the new marketing"
        description="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
      />
      <div className="w-full gap-8 flex flex-col md:flex-row justify-center items-center">
        {caringData.map((card, index) => {
          return (
            <CaringCard
              key={index}
              img={card.img}
              description={card.desctiption}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CaringSection;

interface ICaringProps {
  img: StaticImageData;
  description: string;
}

const CaringCard = ({ img, description }: ICaringProps) => {
  return (
    <div className="w-full lg:w-92 h-70 overflow-hidden md:h-91.5 relative rounded-lg flex justify-center items-end">
      <Image
        src={img}
        alt="care-1-image"
        className="rounded-lg hover:scale-[1.05] transition-all ease-in-out duration-500 h-50 md:h-71.5 object-cover absolute top-0 left-0 right-0"
      />

      <div className="rounded-lg z-10 image-shadow bg-neutral-silver p-4 max-w-60 lg:max-w-79.25 w-full flex flex-col gap-2 md:gap-4 justify-center items-center">
        <p className="font-semibold text-neutral-gray text-base md:text-[20px] leading-7 text-center">
          {description}
        </p>
        <button className="font-semibold group text-base md:text-[20px] flex items-center gap-2 cursor-pointer leading-7 text-brand-primary">
          Read more
          <RightArrow className="size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
