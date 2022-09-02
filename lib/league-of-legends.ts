import { ChampionMasteryModel } from "./types";

export const RIOT_GAMES_API_KEY_URL = `?api_key=${process.env.RIOT_GAMES_API_KEY}`;
export const RIOT_GAMES_ENCRYPTED_SUMMONER_ID =
  "i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE";
export const RIOT_GAMES_NORTH_AMERICA = "https://na1.api.riotgames.com/";

const getLatestLeagueOfLegendsVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();
  return data[0];
};

const getChampions = async () => {
  const version = await getLatestLeagueOfLegendsVersion();
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
  );
  const data = await res.json();
  return data.data;
};

export const getEncryptedSummonerId = async (summonerName: string) => {
  const res = await fetch(
    `${RIOT_GAMES_NORTH_AMERICA}lol/summoner/v4/summoners/by-name/${summonerName}${RIOT_GAMES_API_KEY_URL}`
  );
  const data = await res.json();
  return data.id;
};

export const getChampionMasteries = async (summonerName: string) => {
  let championMasteries = [];
  const id = await getEncryptedSummonerId(summonerName);
  const res = await fetch(
    `${RIOT_GAMES_NORTH_AMERICA}lol/champion-mastery/v4/champion-masteries/by-summoner/${id}${RIOT_GAMES_API_KEY_URL}`
  );
  const championData = await getChampions();
  const masteryData = await res.json();
  for (let count = 0; count < 5; count++) {
    let championFound: any = Object.values(championData).find(
      (champion: any) => {
        return champion.key === masteryData[count].championId.toString();
      }
    );
    championMasteries.push({
      name: championFound?.name,
      title: championFound?.title,
      championPoints: masteryData[count]?.championPoints,
    } as ChampionMasteryModel);
  }
  return championMasteries;
};
