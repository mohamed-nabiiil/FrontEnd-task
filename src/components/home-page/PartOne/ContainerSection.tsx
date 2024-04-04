import React from "react";
import Form from "./Form";
import UserTable from "./UserTable";
import { useTranslation } from "react-i18next";

const ContainerSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between gap-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2 ">
          <div className="border-4 border-[#6D5CBC] w-16 rounded-full" />
          <h1 className="text-[32px] text-[#1A1A1A] font-bold">
            {t("Part 1")}
          </h1>
        </div>
        <div className="">
          <p className="text-xl text-[#666666]">
            {t(
              "Utilize the provided Strapi API from the assessment to post user data into your Redux store. You are required to"
            )}
          </p>
          <p className="text-xl text-[#666666]">
            {t(
              "add one user into the 'users' collection and display this data in a table using a Get request. Ensure the"
            )}
          </p>
          <p className="text-xl text-[#666666]">
            {t(
              "implementation of Redux for state management, including both POST requests for adding a user and GET"
            )}
          </p>
          <p className="text-xl text-[#666666]">
            {t("requests for displaying data in table.")}
          </p>
        </div>
      </div>
      <div>
        <div className=" w-full flex flex-col xl:flex-row gap-3">
          <div className="flex-[.4]">
            <Form />
          </div>
          <div className="flex-[.6]">
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerSection;
