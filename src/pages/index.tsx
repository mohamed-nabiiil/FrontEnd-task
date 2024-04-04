"use client";
import {
  ContainerSection,
  MapSection,
  TextContainer,
} from "@/components/home-page";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen w-full flex-col gap-16 ${inter.className}`}
    >
      <div className="p-24">
        <ContainerSection />
      </div>
      <div>
        <MapSection />
      </div>
      <div className="p-24">
        <TextContainer />
      </div>
    </main>
  );
}
