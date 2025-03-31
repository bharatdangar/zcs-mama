import RecentProjectIcon from "@/components/icons/RecentProjectIcon";
import Typography from "@/components/Typography";
import AuditBlock from "./AuditBlock";
import ProjectViewBlock from "./ProjectViewBlock";

const projectAvailable = true;

const DashboardPage = () => {
  return (
    <div className="p-5 space-y-5">
      {projectAvailable ? (
        <>
          <ProjectViewBlock />
          <AuditBlock />
        </>
      ) : (
        <div className="p-6 bg-white text-secondary text-center py-[7.5rem]  rounded-lg space-y-2">
          <RecentProjectIcon className="mx-auto" />
          <Typography variant="h5" className="font-bold">
            No Recent Project
          </Typography>
          <Typography>
            You haven&apos;t scanned any projects yet. Start by searching for a
            GCP project or initiate your first security scan.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
