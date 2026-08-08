import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";

interface IContent {
  data: {
    image: StaticImageData;
    imageAlt: string;
    title: string;
    description: string;
  };
}

const ContentSection = ({ data }: IContent) => {
  return (
    <div className="w-full flex flex-col max-md:text-center md:flex-row px-4 xl:px-36 justify-between items-center gap-4">
      <Image
        src={data.image}
        alt={data.imageAlt}
        className="w-70 lg:h-110.5 lg:w-110.5"
      />
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-col gap-4 w-full max-w-150.25">
          <h2 className="font-semibold text-neutral-d-gray text-2xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="text-sm text-neutral-gray max-md:text-justify">
            {data.description}
          </p>
        </div>
        <div className="max-md:mx-auto">
          <Button size={"lg"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
