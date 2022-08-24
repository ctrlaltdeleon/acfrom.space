import {
  ERROR_NUMBER,
  MY_YOUTUBE_ID,
  MY_YOUTUBE_LINK,
} from "../library/reusables";
import { getYouTubeUserData } from "../library/youtube";
import MetricCard from "./MetricCard";
import useSWR from "swr";
import { YouTubeModel } from "../library/types";

export default function YouTube() {
  const { data } = useSWR<YouTubeModel>(MY_YOUTUBE_ID, getYouTubeUserData);

  const link: string =
    "https://www.youtube.com/channel/" + data?.linkId ?? MY_YOUTUBE_LINK;
  const subscribers: number = data?.subscribers ?? ERROR_NUMBER;
  const videos: number = data?.videos ?? ERROR_NUMBER;
  const views: number = data?.views ?? ERROR_NUMBER;

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
