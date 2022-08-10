import React, { Fragment, useEffect, useState } from "react";

import * as API from "../library/api";
import useSWR from "swr";
import { getChampions } from "../library/utils";

export default function LeagueOfLegendsMastery() {
  const { data } = useSWR(API.RIOT_GAMES_SUMMONER_MASTERY, API.FETCHER);

  const [championData, setChampionData] = useState<any>([]);

  useEffect(() => {
    const response = getChampions();
    response.then((result) => {
      setChampionData(result);
    });
  }, []);

  console.log("ac***", championData);

  const favoriteChampionId: string = data ? `${data[0]?.championId}` : "";
  const secondFavoriteChampionId: string = data ? `${data[1]?.championId}` : "";
  const thirdFavoriteChampionId: string = data ? `${data[2]?.championId}` : "";

  return (
    <Fragment>
      <p>Favorite champion: {favoriteChampionId}</p>
      <p>2nd Favorite champion: {secondFavoriteChampionId}</p>
      <p>3rd Favorite champion: {thirdFavoriteChampionId}</p>
    </Fragment>
  );
}
