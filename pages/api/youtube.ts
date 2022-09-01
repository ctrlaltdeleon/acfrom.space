import {
  MY_YOUTUBE_ID,
  SECONDS_OF_FRESHNESS,
  SECONDS_OF_REVALIDATION,
} from "../../lib/utils";
import { type NextRequest } from "next/server";
import { YouTubeModel } from "../../lib/types";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${MY_YOUTUBE_ID}&key=${apiKey}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return new Response(
    JSON.stringify({
      linkId: data.items[0].id,
      subscribers: parseInt(data.items[0].statistics.subscriberCount),
      videos: parseInt(data.items[0].statistics.videoCount),
      views: parseInt(data.items[0].statistics.viewCount),
    } as YouTubeModel),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": `public, s-maxage=${SECONDS_OF_FRESHNESS}, stale-while-revalidate=${SECONDS_OF_REVALIDATION}`,
      },
    }
  );
}
