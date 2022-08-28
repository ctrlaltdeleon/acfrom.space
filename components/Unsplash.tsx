import MetricCard from "./MetricCard";
import { UnsplashModel } from "../lib/types";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function Unsplash() {
  const { data } = useSWR<UnsplashModel>("/api/unsplash", fetcher);

  const downloads = new Number(data?.downloads);
  const views = new Number(data?.views);
  const link = "https://unsplash.com/acfromspace";

  return (
    <>
      <MetricCard
        header="Unsplash Downloads"
        link={link}
        metric={downloads}
        isCurrency={false}
      />
      <MetricCard
        header="Unsplash Views"
        link={link}
        metric={views}
        isCurrency={false}
      />
    </>
  );
}
