import { featureCardsData } from "@/data/data";
import SectionHeader from "../common/SectionHeader";

const FeaturesSection = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <SectionHeader
        title="Manage your entire community in a single system"
        description="Who is Nextcent suitable for?"
      />
      <div className="w-full px-4 xl:px-36 py-2.5 flex flex-col md:flex-row justify-between">
        {featureCardsData.map((card, index) => {
          return (
            <FeatureCard
              key={index}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;

interface IFeatureCard {
  icon: any;
  heading: string;
  description: string;
}

const FeatureCard = ({ icon, heading, description }: IFeatureCard) => {
  return (
    <div className="w-full md:max-w-74.75 py-6 md:px-8 flex flex-col gap-2">
      <div className="flex flex-col gap-4 justify-center items-center ">
        {icon}
        <h3 className="font-bold text-center text-neutral-d-gray text-xl md:text-[28px] md:leading-9">
          {heading}
        </h3>
      </div>
      <p className="text-center text-neutral-gray text-sm">{description}</p>
    </div>
  );
};
