import { metricsData } from "@/data/data";

const MetricsSection = () => {
  return (
    <div className="py-16 gap-6 px-4 md:px-36 flex flex-col md:flex-row items-center justify-between bg-neutral-silver">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-2xl lg:text-4xl">
          <span className="text-neutral-d-gray">Helping a local</span> <br />
          <span className="text-brand-primary">business reinvent itself</span>
        </h3>
        <p className="text-sm md:text-base text-neutral-d-gray">
          We reached here with our hard work and dedication
        </p>
      </div>
      <div className="max-w-135 grid grid-cols-2 gap-2 lg:gap-y-10 lg:gap-x-7.5">
        {metricsData.map((metric) => {
          return (
            <MetricCard
              key={metric.title}
              value={metric.value}
              icon={metric.icon}
              title={metric.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MetricsSection;

interface IMetricProps {
  value: string;
  title: string;
  icon: any;
}

const MetricCard = ({ value, title, icon }: IMetricProps) => {
  return (
    <div className="lg:w-63.75 flex gap-4 items-center">
      {icon}
      <div className="flex flex-col">
        <span className="font-bold text-sm lg:text-[28px] leading-9 text-neutral-d-gray">
          {value}
        </span>
        <span className="text-xs lg:text-base text-neutral-gray">{title}</span>
      </div>
    </div>
  );
};
