import Typography from "@/components/Typography";
import { IProjectCardProps } from "@/lib/types";
import Link from "next/link";

const ProjectCard = ({ title, id, activeTime, onClick }: IProjectCardProps) => {
  return (
    <Link
      href={"#"}
      className="border-grayLighter rounded-md border p-5 flex flex-col sm:flex-row justify-between gap-6 hover:bg-grayLighter/30 transition-colors duration-300 "
    >
      <Typography variant="h4" className="text-2xl font-medium">
        {title}
      </Typography>
      <div className="text-secondary space-y-1">
        <Typography>ID: {id}</Typography>
        <Typography>Last active: {activeTime}</Typography>
      </div>
    </Link>
  );
};

export default ProjectCard;
