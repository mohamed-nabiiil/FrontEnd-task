import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
//import Map from "./Map";

const Map = dynamic(() => import("@/components/home-page/PartTwoMap/Map"), {
  loading: () => <p>A map is loading</p>,
  ssr: false,
});
const MapSection = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-between gap-14 py-20">
      <div className="flex flex-col gap-3 px-24">
        <div className="flex flex-row items-center gap-2 ">
          <div className="border-4 border-[#6D5CBC] w-16 rounded-full" />
          <h1 className="text-[32px] text-[#1A1A1A] font-bold">
            {t("Part 2")}
          </h1>
        </div>
        <div className="">
          <p className="text-lg font-normal text-[#666666]">
            {t(
              "Implement a map using any library of your choice (leaflet is recommended). Search for the coordinates of 'Digifly"
            )}
          </p>
          <p className="text-lg font-normal text-[#666666]">
            {t(
              "Company' on Google Maps, then place a tooltip at these coordinates. Ensure that the tooltip styling matches the"
            )}
          </p>
          <p className="text-lg font-normal text-[#666666]">
            {t("provided design below.")}
          </p>
        </div>
      </div>
      <div>
        <div className="w-full">
          <Map posix={[30.061650762524245, 31.336852929070677]} zoom={30} />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
