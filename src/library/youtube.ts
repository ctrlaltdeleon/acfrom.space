// youtube (need dev account)
// doc: https://console.cloud.google.com/apis/dashboard?project=raiden-yeet
// doc: https://developers.google.com/youtube/v3/docs/channels

import { YouTubeModel } from "./types";

export const YOUTUBE_SNIPPET = "snippet";
export const YOUTUBE_STATISTICS = "statistics";

export const getYouTubeUserData = async (userId: string) => {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=${YOUTUBE_SNIPPET}%2C${YOUTUBE_STATISTICS}&id=${userId}&key=${apiKey}`
  );
  const data = await res.json();
  return {
    subscribers: data.items[0].statistics.subscriberCount,
    videos: data.items[0].statistics.videoCount,
    views: data.items[0].statistics.viewCount,
  } as YouTubeModel;
};
