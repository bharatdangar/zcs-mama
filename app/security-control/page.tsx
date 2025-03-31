import Typography from "@/components/Typography";
import ControlTabBlock from "./ControlTabBlock";
import TerraFormPreviewBlock from "./TerraFormPreviewBlock";

const SecurityControlPage = () => {
  return (
    <div className="p-5 space-y-5">
      <div className="p-6 bg-white rounded-lg space-y-5">
        <Typography variant="h3">
          Apply Security Controls to Your GCP Project
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ControlTabBlock />
          <TerraFormPreviewBlock />
        </div>
      </div>
    </div>
  );
};
export default SecurityControlPage;
