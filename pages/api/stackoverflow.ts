import {
  MY_STACK_OVERFLOW_ID,
  SECONDS_OF_FRESHNESS,
  SECONDS_OF_REVALIDATION,
} from "../../lib/utils";
import { type NextRequest } from "next/server";
import { StackOverflowModel } from "../../lib/types";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  const response = await fetch(
    `https://api.stackexchange.com/2.3/users/${MY_STACK_OVERFLOW_ID}?order=desc&sort=reputation&site=stackoverflow`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return new Response(
    JSON.stringify({
      link: data.items[0].link,
      reputation: data.items[0].reputation,
    } as StackOverflowModel),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": `public, s-maxage=${SECONDS_OF_FRESHNESS}, stale-while-revalidate=${SECONDS_OF_REVALIDATION}`,
      },
    }
  );
}
