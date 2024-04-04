import "@/styles/globals.css";
import "../utils/i18n";
import type { AppProps } from "next/app";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../store/store";
import { Footer, Navbar } from "@/components/layout";
import { DirectionProvider } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>(i18n.language);

  useEffect(() => {
    i18n.on("languageChanged", setLang);
    return () => {
      i18n.off("languageChanged", setLang);
    };
  }, []);
  return (
    <Provider store={store}>
      <DirectionProvider lang={lang}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </DirectionProvider>
    </Provider>
  );
}
