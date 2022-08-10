import useSWR from "swr";

import * as API from "../library/api";

export const sum = (num1: number, num2: number) => num1 + num2;

export const showDataOrNothing = (data: any, nothing: string) =>
  data ? data : "";

const getLatestLeagueOfLegendsVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  // const { versions } = await response.json();
  // const version = versions.slice(0)
  return response.json();
};

export const getChampions = async () => {
  const version = await getLatestLeagueOfLegendsVersion();
  const response2 = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/${version[0]}/data/en_US/champion.json`
  );
  // const { items } = await response.json();
  // const tracks = items.slice(0, 10).map((track: any) => ({
  //   artist: track.artists.map((_artist: any) => _artist.name).join(", "),
  //   songUrl: track.external_urls.spotify,
  //   title: track.name,
  // }));
  return response2.json();
};
