import { ERROR_NUMBER, MY_YOUTUBE_ID } from "../library/reusables";
import { getYouTubeUserData } from "../library/youtube";
import useSWR from "swr";
import { YouTubeModel } from "../library/types";

export default function YouTube() {
  const { data } = useSWR<YouTubeModel>(MY_YOUTUBE_ID, getYouTubeUserData);

  const subscribers: number = data?.subscribers ?? ERROR_NUMBER;
  const videos: number = data?.videos ?? ERROR_NUMBER;
  const views: number = data?.views ?? ERROR_NUMBER;

  return (
    <>
      <div className="text-lg font-medium text-sky-500">YouTube</div>
      <p>Subscribers: {subscribers}</p>
      <p>Videos made: {videos}</p>
      <p>Video views: {views}</p>
    </>
  );
}
