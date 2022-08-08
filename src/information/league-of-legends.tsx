import React, { Fragment, useEffect, useState } from "react";

import * as API from "../library/api";

const getCurrentSummonerRanks = async () => {
  const response = await fetch(API.RIOT_GAMES_CURRENT_SUMMONER_RANKS);
  return response.json();
};

export default function LeagueOfLegends() {
  const [soloQueueRank, setSoloQueueRank] = useState<string>("");
  const [flexQueueRank, setFlexQueueRank] = useState<string>("");

  useEffect(() => {
    const response = getCurrentSummonerRanks();
    response.then((result) => {
      setSoloQueueRank(`${result[0]?.tier} ${result[0]?.rank}`);
      setFlexQueueRank(`${result[1]?.tier} ${result[1]?.rank}`);
    });
  }, []);

  return (
    <Fragment>
      <h2>League of Legends</h2>
      <p>Solo queue rank: {soloQueueRank}</p>
      <p>Flex queue rank: {flexQueueRank}</p>
    </Fragment>
  );
}
