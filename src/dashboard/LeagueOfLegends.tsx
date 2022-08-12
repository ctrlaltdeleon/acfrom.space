import React, { Fragment } from "react";

import { getChampionMasteries } from "../library/league-of-legends";
import useSWR from "swr";

export default function LeagueOfLegendsMastery() {
  const { data } = useSWR<any>(
    "/library/league-of-legends",
    getChampionMasteries
  );

  return (
    <Fragment>
      {data && (
        <Fragment>
          <h2>League of Legends</h2>
          <p>
            Favorite champion: {data[0]?.name}, {data[0].title} (
            {data[0].championPoints})
          </p>
          <p>
            2nd Favorite champion: {data[1]?.name}, {data[1].title} (
            {data[1].championPoints})
          </p>
          <p>
            3rd Favorite champion: {data[2]?.name}, {data[2].title} (
            {data[2].championPoints})
          </p>
          <p>
            4th Favorite champion: {data[3]?.name}, {data[3].title} (
            {data[3].championPoints})
          </p>
          <p>
            5th Favorite champion: {data[4]?.name}, {data[4].title} (
            {data[4].championPoints})
          </p>
        </Fragment>
      )}
    </Fragment>
  );
}
