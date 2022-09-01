import MetricCard from "./MetricCard";
import { YouTubeModel } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function YouTube() {
  const { data } = useSWR<YouTubeModel>("/api/youtube", fetcher);

  const link = "https://www.youtube.com/channel/" + data?.linkId;
  const subscribers = data?.subscribers;
  const videos = data?.videos;
  const views = data?.views;

  return (
    <>
      <MetricCard
        header="YouTube Subscribers"
        isCurrency={false}
        link={link}
        metric={subscribers}
      />
      <MetricCard
        header="YouTube Videos"
        isCurrency={false}
        link={link}
        metric={videos}
      />
      <MetricCard
        header="YouTube Views"
        isCurrency={false}
        link={link}
        metric={views}
      />
    </>
  );
}
