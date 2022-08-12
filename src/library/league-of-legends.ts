import * as API from "./api";
import { ChampionMastery } from "./types";

/**
 * Latest version which as at index 0.
 *
 * @returns "12.15.1"
 */
const getLatestLeagueOfLegendsVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  return data[0];
};

/**
 *
 * @returns Latest champion data.
 */
const getChampions = async () => {
  const version = await getLatestLeagueOfLegendsVersion();
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
  const data = await res.json();
  return data.data;
};

/**
 * Change "amountOfChampions" for amount of masteries to send.
 *
 * @returns [{ name: "Hecarim" ...} , {...}]
 */
export const getChampionMasteries = async () => {
  let championMasteries = [];
  let amountOfChampions = 5;
  const res = await fetch(API.RIOT_GAMES_SUMMONER_MASTERY);
  const masteryData = await res.json();
  const championData = await getChampions();
  for (let count = 0; count < amountOfChampions; count++) {
    let championFound: any = Object.values(championData).find(
      (champion: any) => {
        return champion.key === masteryData[count].championId.toString();
      }
    );
    let championObject = {
      name: championFound.name,
      title: championFound.title,
      championPoints: masteryData[count].championPoints,
    };
    championMasteries.push(championObject);
  }
  return championMasteries;
};

// name: "Hecarim"
// title: "the Shadow of War"
// championPoints: 140709
// append what else later

//  need to do a search on summoner id => encrypted id => these calls
