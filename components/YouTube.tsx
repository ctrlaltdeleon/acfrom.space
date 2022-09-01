import MetricCard from "./MetricCard";
import { YouTubeModel } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function YouTube() {
  const { data } = useSWR<YouTubeModel>("/api/youtube", fetcher);

  const link: string = "https://www.youtube.com/channel/" + data?.linkId;
  const subscribers = data?.subscribers;
  const videos = data?.videos;
  const views = data?.views;

  return (
    <>
      <MetricCard
        header="YouTube Subscribers"
        link={link}
        metric={subscribers}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Videos"
        link={link}
        metric={videos}
        isCurrency={false}
      />
      <MetricCard
        header="YouTube Views"
        link={link}
        metric={views}
        isCurrency={false}
      />
    </>
  );
}
