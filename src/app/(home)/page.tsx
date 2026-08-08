import {
  HeroSection,
  DemoSection,
  CaringSection,
  ClientsSection,
  ContentSection,
  MetricsSection,
  FeaturesSection,
  CustomersSection,
} from "@/components/home";
import { contentData } from "@/data/data";

const Page = () => {
  return (
    <div className="w-full flex flex-col gap-10 ">
      <HeroSection />
      <ClientsSection />
      <FeaturesSection />
      <ContentSection data={contentData[0]} />
      <MetricsSection />
      <ContentSection data={contentData[1]} />
      <CustomersSection />
      <CaringSection />
      <DemoSection />
    </div>
  );
};

export default Page;
