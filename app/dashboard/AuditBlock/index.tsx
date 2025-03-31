"use client";

import AuditCard from "@/components/AuditCard";
import CheckIcon from "@/components/icons/CheckIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import FailedIcon from "@/components/icons/FailedIcon";
import PDFIcon from "@/components/icons/PdfIcon";
import TimeTakenIcon from "@/components/icons/TimeTakenIcon";
import TotalCheckIcon from "@/components/icons/TotalCheckIcon";
import Typography from "@/components/Typography";
import { Button } from "@heroui/button";

import EyeIcon from "@/components/icons/EyeIcon";
import { Select, SelectItem } from "@heroui/select";

export const ServiceStatusList = [
  { key: "critical", label: "Critical" },
  { key: "fail", label: "Fail" },
  { key: "low", label: "Low" },
  { key: "pass", label: "Pass" },
];
const AuditBlock = () => {
  return (
    <div className="p-6 bg-white rounded-lg space-y-5">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <Typography variant="h3">
          Security Audit Results for: Project Alpha
        </Typography>
        <Button
          variant="flat"
          color="primary"
          radius="sm"
          startContent={<PDFIcon />}
          className="text-primary md:ml-auto"
        >
          Download PDF
        </Button>
        <Button
          variant="flat"
          color="primary"
          radius="sm"
          startContent={<DownloadIcon />}
          className="text-primary"
        >
          Download Report
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
        <AuditCard
          label="Passed Checks"
          passNumber={"24"}
          icon={<CheckIcon />}
        />
        <AuditCard
          label="Failed Checks"
          passNumber={"03"}
          icon={<FailedIcon />}
          className="bg-red/20"
          iconClassName="bg-red"
        />

        <AuditCard
          label="Total Checks"
          passNumber={"27"}
          icon={<TotalCheckIcon />}
          className="bg-blue/20"
          iconClassName="bg-blue"
        />
        <AuditCard
          label="Time Taken"
          passNumber={"12s"}
          icon={<TimeTakenIcon />}
          className="bg-orange/20"
          iconClassName="bg-orange"
        />
      </div>
      <div className="border border-grayLighter rounded-md py-1 px-2.5">
        <Select
          className="w-full"
          label={
            <div className="flex gap-1.5 items-center">
              <EyeIcon /> Public Cloud Run Services
            </div>
          }
          labelPlacement="outside-left"
          // placeholder="Select an animal"
          // selectedKeys={values}
          selectionMode="multiple"
          // onSelectionChange={setValues}
          classNames={{
            base: "flex flex-col sm:flex-row gap-2.5 items-start sm:items-center",
            trigger:
              "bg-transparent border-none !shadow-none data-[hover=true]:bg-transparent",
            // innerWrapper:
            //   "[&>span]:bg-grayLighter [&>span]:px-1.5 [&>span]:inline-flex",
            value: "bg-grayLighter px-2 inline-flex w-fit rounded",
          }}
          // renderValue={(items) => {
          //   return ServiceStatusList.map((item) => (
          //     <div key={item.key} className="flex items-center gap-2">
          //       <div className="flex flex-col">
          //         <span className="text-default-500 text-tiny">
          //           {item.label}
          //         </span>
          //       </div>
          //     </div>
          //   ));
          // }}
        >
          {ServiceStatusList.map((item) => (
            <SelectItem key={item.key}>{item.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default AuditBlock;
