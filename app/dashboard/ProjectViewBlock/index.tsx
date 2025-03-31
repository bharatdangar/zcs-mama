import { SearchIcon } from "@/components/icons";
import ScanIcon from "@/components/icons/ScanIcon";
import ProjectCard from "@/components/ProjectCard";
import Typography from "@/components/Typography";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

import { projects } from "@/components/constant";
const ProjectViewBlock = () => {
  return (
    <div className="p-6 bg-white rounded-lg space-y-5">
      <Typography variant="h3">Select Your GCP Project</Typography>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
        <Input
          variant="bordered"
          startContent={<SearchIcon />}
          placeholder="Search Projects..."
          radius="sm"
          className="flex-grow group-data-[focus=true]:border-primary"
          classNames={{
            inputWrapper:
              "group-data-[focus=true]:!border-black/20 data-[hover=true]:!border-black/10",
          }}
        />
        <Button
          className="bg-secondary text-white"
          startContent={<ScanIcon className="sm:size-8" />}
          radius="sm"
        >
          Scan Project
        </Button>
      </div>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectViewBlock;
