// youtube (need dev account)
// doc: https://console.cloud.google.com/apis/dashboard?project=raiden-yeet
// doc: https://developers.google.com/youtube/v3/docs/channels

import { YouTubeModel } from "./types";

export const YOUTUBE_BASE_URL = "https://youtube.googleapis.com/youtube/v3/";
export const YOUTUBE_SNIPPET_DATA = "snippet";
export const YOUTUBE_STATISTICS_DATA = "statistics";

export const getYouTubeUserData = async (userId: string) => {
  const res = await fetch(
    `${YOUTUBE_BASE_URL}channels?part=${YOUTUBE_SNIPPET_DATA}%2C${YOUTUBE_STATISTICS_DATA}&id=${userId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return {
    subscribers: data.items[0].statistics.subscriberCount,
    videos: data.items[0].statistics.videoCount,
    views: data.items[0].statistics.viewCount,
  } as YouTubeModel;
};
