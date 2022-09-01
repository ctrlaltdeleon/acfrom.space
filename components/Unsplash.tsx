import MetricCard from "./MetricCard";
import { UnsplashModel } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function Unsplash() {
  const { data } = useSWR<UnsplashModel>("/api/unsplash", fetcher);

  const downloads = data?.downloads;
  const link = "https://unsplash.com/acfromspace";
  const views = data?.views;

  return (
    <>
      <MetricCard
        header="Unsplash Downloads"
        isCurrency={false}
        link={link}
        metric={downloads}
      />
      <MetricCard
        header="Unsplash Views"
        isCurrency={false}
        link={link}
        metric={views}
      />
    </>
  );
}
