import { ListCheck } from "lucide-react";

type HeaderInternalProps = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export function HeaderInternal({ icon, subtitle, title }: HeaderInternalProps) {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold flex gap-3 items-center">
        {icon}
        {title}
      </h1>
      <p>{subtitle}</p>
    </div>
  );
}
