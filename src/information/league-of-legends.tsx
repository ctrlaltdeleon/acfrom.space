import React, { Fragment } from "react";

import * as API from "../library/api";
import useSWR from "swr";

export default function LeagueOfLegends() {
  const { data } = useSWR(API.RIOT_GAMES_CURRENT_SUMMONER_RANKS, API.FETCHER);

  console.log("ac*** my ranks are switching", data);

  // need to check data[?].queueType before processing

  const soloQueueRank: string = data ? `${data[0]?.tier} ${data[0]?.rank}` : "";
  const flexQueueRank: string = data ? `${data[1]?.tier} ${data[1]?.rank}` : "";

  return (
    <Fragment>
      <h2>League of Legends</h2>
      <p>Solo queue rank: {soloQueueRank}</p>
      <p>Flex queue rank: {flexQueueRank}</p>
    </Fragment>
  );
}
