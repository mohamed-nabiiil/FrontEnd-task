import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="flex items-center justify-center bg-[#6D5CBC] w-full h-full py-6 ">
      <p className="text-center text-lg text-[#e2e8f0]">
        {t("All Rights Reserved © Digifly 2024")}
      </p>
    </footer>
  );
};

export default Footer;
