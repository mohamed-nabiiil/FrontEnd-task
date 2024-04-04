import React from "react";
import { useTranslation } from "react-i18next";
import TextEditor from "./TextEditor";

const TextContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between gap-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2 ">
          <div className="border-4 border-[#6D5CBC] w-16 rounded-full" />
          <h1 className="text-[32px] text-[#1A1A1A] font-bold">
            {t("Part 3")}
          </h1>
        </div>
        <div className="">
          <p className="text-lg font-normal text-[#666666]">
            {t(
              "Implement a text editor that precisely replicates the UI styles provided. It's essential to create the undo and redo"
            )}
          </p>
          <p className="text-lg font-normal text-[#666666]">
            {t(
              "functionalities from scratch, along with two additional features of choice. You may use any package, but"
            )}
          </p>
          <p className="text-lg font-normal text-[#666666]">
            {t(
              "creating these functionalities from scratch will be advantageous. Ensure that all text editor functionalities are operational."
            )}
          </p>
        </div>
      </div>
      <div>
        <div className="w-full">
          <TextEditor />
        </div>
      </div>
    </div>
  );
};

export default TextContainer;
