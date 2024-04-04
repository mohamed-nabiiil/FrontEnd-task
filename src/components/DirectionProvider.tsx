"use client";
import { useEffect, ReactNode } from "react";

interface DirectionProviderProps {
  children: ReactNode;
  lang: string;
}

const DirectionProvider = ({ children, lang }: DirectionProviderProps) => {
  useEffect(() => {
    document.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return <>{children}</>;
};

export default DirectionProvider;
