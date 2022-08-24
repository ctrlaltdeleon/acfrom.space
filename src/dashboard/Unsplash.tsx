import { getUnsplashUserPublicProfile } from "../library/unsplash";
import { ERROR_NUMBER, MY_USERNAME } from "../library/reusables";
import MetricCard from "./MetricCard";
import { UnsplashModel } from "../library/types";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<UnsplashModel>(
    MY_USERNAME,
    getUnsplashUserPublicProfile
  );

  const downloads: number = data?.downloads ?? ERROR_NUMBER;
  const views: number = data?.views ?? ERROR_NUMBER;

  return (
    <>
      <MetricCard
        header="Unsplash Downloads"
        link={"link"}
        metric={downloads}
        isCurrency={false}
      />
      <MetricCard
        header="Unsplash Views"
        link={"link"}
        metric={views}
        isCurrency={false}
      />
    </>
  );
}
