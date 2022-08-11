import * as API from "../library/api";

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
 * @returns All champion data.
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
    const champion = Object.values(championData).find((champion: any) => {
      return champion.key === masteryData[count].championId.toString();
    });
    championMasteries.push(champion);
  }
  return championMasteries;
};
