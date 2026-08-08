import { Button } from "../ui/button";
import RightArrow from "@/assets/icons/right-arrow.svg";

const DemoSection = () => {
  return (
    <div className="w-full bg-neutral-silver py-8 px-4 gap-8 flex flex-col justify-center items-center text-center">
      <h2 className="font-semibold text-3xl md:text-4xl lg:text-[64px] lg:leading-19 max-w-150 lg:max-w-221.75">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <Button size={"lg"}>
        Get a Demo
        <RightArrow className="size-6 text-white" />
      </Button>
    </div>
  );
};

export default DemoSection;
