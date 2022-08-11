import React, { Fragment, useEffect, useState } from "react";

import { getChampionMasteries } from "../library/utils";

export default function LeagueOfLegendsMastery() {
  const [favoriteChampions, setFavoriteChampions] = useState<any>([]);

  useEffect(() => {
    const response = getChampionMasteries();
    response.then((result) => {
      setFavoriteChampions(result);
    });
  }, []);

  return (
    <Fragment>
      <p>Favorite champion: {favoriteChampions[0]?.name}</p>
      <p>2nd Favorite champion: {favoriteChampions[1]?.name}</p>
      <p>3rd Favorite champion: {favoriteChampions[2]?.name}</p>
      <p>4th Favorite champion: {favoriteChampions[3]?.name}</p>
      <p>5th Favorite champion: {favoriteChampions[4]?.name}</p>
    </Fragment>
  );
}
