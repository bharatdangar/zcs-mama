"use client";

import { BundleControl } from "@/components/constant";
import CustomIcon from "@/components/icons/CustomIcon";
import QuickIcon from "@/components/icons/QuickIcon";
import Typography from "@/components/Typography";
import { Checkbox } from "@heroui/checkbox";
import { Tab, Tabs } from "@heroui/react";
const ControlTabBlock = () => {
  return (
    <div>
      <Tabs
        color="primary"
        radius="sm"
        aria-label="Apply Security Controls"
        className="w-full "
        classNames={{
          tabList:
            "flex flex-col sm:flex-row gap-3 sm:gap-6 w-full bg-transparent",
          tab: "bg-primary/20 h-11 data-[hover=true]:opacity-100 text-base",
          tabContent: "text-primary",
          cursor: "bg-themeGradient",
        }}
      >
        <Tab
          key="quick-apply"
          title={
            <div className="flex items-center space-x-2">
              <QuickIcon />
              <span>Quick Apply</span>
            </div>
          }
        >
          <div className="p-5 border border-grayLighter rounded-md space-y-6">
            <Typography variant="h4" className="md:text-2xl">
              Pre-Bundled Controls
            </Typography>
            <div className="flex flex-col gap-3.5">
              {BundleControl.map((item) => {
                return (
                  <Checkbox
                    defaultSelected={item.selected}
                    classNames={{
                      wrapper: "after:bg-[#F94141]",
                    }}
                    key={item.label}
                  >
                    {item.label}
                  </Checkbox>
                );
              })}
            </div>
          </div>
        </Tab>
        <Tab
          key="custom-apply"
          title={
            <div className="flex items-center space-x-2">
              <CustomIcon />
              <span>Custom Apply</span>
            </div>
          }
        >
          <div className="p-5 border border-grayLighter rounded-md space-y-6">
            <Typography variant="h4" className="md:text-2xl">
              Custom Apply Pre-Bundled Controls
            </Typography>
            <div className="flex flex-col gap-3.5">
              {BundleControl.map((item) => {
                return (
                  <Checkbox
                    defaultSelected={item.selected}
                    classNames={{
                      wrapper: "after:bg-[#F94141]",
                    }}
                    key={item.label}
                  >
                    {item.label}
                  </Checkbox>
                );
              })}
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ControlTabBlock;
