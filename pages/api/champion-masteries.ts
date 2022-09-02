import {
  MY_USERNAME,
  SECONDS_OF_FRESHNESS,
  SECONDS_OF_REVALIDATION,
} from "../../lib/utils";
import { type NextRequest } from "next/server";
import { ChampionMasteryModel, UnsplashModel } from "../../lib/types";
import { getEncryptedSummonerId } from "../../lib/league-of-legends";

export const config = {
  runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
  let championMasteries = [];
  const id = await getEncryptedSummonerId(summonerName);
  const championData = await getChampions();
  const response = await fetch(
    `${RIOT_GAMES_NORTH_AMERICA}lol/champion-mastery/v4/champion-masteries/by-summoner/${id}${RIOT_GAMES_API_KEY_URL}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  for (let count = 0; count < 5; count++) {
    let championFound: any = Object.values(championData).find(
      (champion: any) => {
        return champion.key === data[count].championId.toString();
      }
    );
    championMasteries.push({
      name: championFound?.name,
      title: championFound?.title,
      championPoints: data[count]?.championPoints,
    } as ChampionMasteryModel);
  }
  return new Response(
    JSON.stringify({
      championMasteries,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": `public, s-maxage=${SECONDS_OF_FRESHNESS}, stale-while-revalidate=${SECONDS_OF_REVALIDATION}`,
      },
    }
  );
}
