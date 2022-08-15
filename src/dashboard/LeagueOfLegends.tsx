import { getChampionMasteries } from "../library/league-of-legends";
import { MY_SUMMONER_NAME } from "../library/reusables";
import useSWR from "swr";
import { ChampionMasteryModel } from "../library/types";
import { Fragment } from "react";

export default function LeagueOfLegendsMastery() {
  const { data } = useSWR<Array<ChampionMasteryModel>>(
    MY_SUMMONER_NAME,
    getChampionMasteries
  );

  return (
    <>
      <h2>League of Legends</h2>
      {data &&
        data.map((champion: ChampionMasteryModel, index: number) => (
          <Fragment key={index}>
            <p className="text-lg font-medium text-sky-500">
              Rank {index + 1}: {data[index].name}, {data[index].title} (
              {data[index].championPoints} mastery points)
            </p>
          </Fragment>
        ))}
    </>
  );
}
