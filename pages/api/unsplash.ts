import {
  MY_USERNAME,
  SECONDS_OF_FRESHNESS,
  SECONDS_OF_REVALIDATION,
} from "../../lib/utils";
import { type NextRequest } from "next/server";
import { UnsplashModel } from "../../lib/types";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const accessToken = process.env.UNSPLASH_ACCESS_KEY;
  const response = await fetch(
    `https://api.unsplash.com/users/${MY_USERNAME}/statistics?client_id=${accessToken}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return new Response(
    JSON.stringify({
      downloads: data.downloads.total,
      views: data.views.total,
    } as UnsplashModel),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": `public, s-maxage=${SECONDS_OF_FRESHNESS}, stale-while-revalidate=${SECONDS_OF_REVALIDATION}`,
      },
    }
  );
}
