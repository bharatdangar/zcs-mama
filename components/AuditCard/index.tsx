import Typography from "@/components/Typography";
import { IClassProps } from "@/lib/types";

import { cn } from "@/lib/utils";

interface IAuditCardProps extends IClassProps {
  label: string;
  passNumber: string | number;
  icon: React.ReactNode;
  iconClassName?: string;
}

const AuditCard = ({
  className,
  label,
  passNumber,
  icon,
  iconClassName,
}: IAuditCardProps) => {
  return (
    <div className={cn("rounded-lg bg-green/20 flex gap-5 p-5", className)}>
      <div className="flex-grow">
        <Typography className="text-sm"> {label}</Typography>
        <Typography className="font-bold text-2xl">{passNumber}</Typography>
      </div>
      <div
        className={cn(
          "bg-green p-[0.875rem] size-[3.25rem] rounded-lg text-white",
          iconClassName
        )}
      >
        {icon}
      </div>
    </div>
  );
};

export default AuditCard;
