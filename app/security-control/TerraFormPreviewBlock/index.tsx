"use client";

import CloudIcon from "@/components/icons/CloudIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import Typography from "@/components/Typography";
import { Button } from "@heroui/react";
import { themes } from "prism-react-renderer";
import { CodeBlock } from "react-code-block";

const TerraFormPreviewBlock = () => {
  return (
    <div className="p-5 border border-grayLighter rounded-md space-y-6">
      <Typography variant="h4" className="md:text-2xl">
        Terraform Plan Preview
      </Typography>
      <div className="p-6 bg-grayLighter/50 rounded-md text-sm">
        <CodeBlock
          code={`function updateGutters(cm) {
    var gutters = cm.display.gutters,
        __specs = cm.options.gutters;

    removeChildren(gutters);

    for (var i = 0; i < specs.length; ++i) {
        var gutterClass = __specs[i];
        var gElt = gutters.appendChild(
            elt(
                "div",
                null,
                "CodeMirror-gutter " + gutterClass
            )
        );
        if (gutterClass == "CodeMirror-linenumbers") {
            cm.display.lineGutter = gElt;
            gElt.style.width = (cm.display.lineNumWidth || 1) + "px";
        }
    }
    return false;
}
              `}
          language="js"
          theme={themes.github}
        >
          <CodeBlock.Code className="overflow-x-auto">
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </CodeBlock.Code>
        </CodeBlock>
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-5">
        <Button
          radius="sm"
          startContent={<CloudIcon />}
          className="bg-themeGradient text-white"
        >
          Deploy Controls
        </Button>
        <Button
          radius="sm"
          startContent={<DownloadIcon />}
          variant="flat"
          className="text-primary bg-primary/20"
        >
          Download Plan
        </Button>
      </div>
    </div>
  );
};

export default TerraFormPreviewBlock;
