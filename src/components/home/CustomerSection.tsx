import Image from "next/image";
import { customersData } from "@/data/data";
import RightArrow from "@/assets/icons/right-arrow.svg";

const CustomersSection = () => {
  return (
    <div className="bg-neutral-silver flex-col md:flex-row gap-10 xl:gap-19.5 p-5 md:py-8 xl:px-36 flex justify-center items-center">
      <Image
        src={customersData.img}
        alt="Tesla image"
        className="min-w-60 w-60 h-60 lg:min-w-81.5 lg:w-81.5 lg:h-81.5 rounded-lg image-shadow bg-center object-cover"
      />
      <div className="gap-4 md:gap-8 flex flex-col md:max-w-187">
        <div className="gap-4 flex flex-col">
          <p className="font-medium max-md:text-justify text-sm lg:text-base text-neutral-gray">
            {customersData.description}
          </p>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[20px] leading-7 text-brand-primary">
              {customersData.userName}
            </span>
            <p className="text-neutral-gray">{customersData.subHeading}</p>
          </div>
        </div>
        <div className="flex gap-3 md:gap-8 max-xl:flex-wrap">
          {customersData.logos.map((customer, index) => {
            return <div key={index}>{customer.icon}</div>;
          })}
          <button className="font-semibold group text-base md:text-[20px] flex items-center gap-2 cursor-pointer md:leading-7 text-brand-primary">
            Meet all customers
            <RightArrow className="size-6 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomersSection;
