interface SectionHeaderProps {
  title: string;
  description?: string;
}

function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h2 className="max-w-136 flex text-center text-neutral-d-gray font-semibold text-2xl md:text-4xl">
        {title}
      </h2>
      <p className="text-neutral-gray text-center max-w-157">{description}</p>
    </div>
  );
}

export default SectionHeader;
