import { getChampionMasteries } from "../lib/league-of-legends";
import { MY_SUMMONER_NAME } from "../lib/utils";
import useSWR from "swr";
import { ChampionMasteryModel } from "../lib/types";
import { Fragment } from "react";

export default function LeagueOfLegendsMastery() {
  const { data } = useSWR<Array<ChampionMasteryModel>>(
    MY_SUMMONER_NAME,
    getChampionMasteries
  );

  return (
    <>
      <div className="text-lg font-medium text-sky-500">League of Legends</div>
      {data &&
        data.map((champion: ChampionMasteryModel, index: number) => (
          <Fragment key={index}>
            <p>
              Rank {index + 1}: {data[index].name}, {data[index].title} (
              {data[index].championPoints} mastery points)
            </p>
          </Fragment>
        ))}
    </>
  );
}
