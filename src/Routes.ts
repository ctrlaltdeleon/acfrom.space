// SWR (stale-while-revalidate)
// Doc: https://swr.vercel.app

export const FETCHER = (url: string) => fetch(url).then((res) => res.json());

// Riot Games (need dev account)
// Doc: https://developer.riotgames.com/docs/lol

export const RIOT_GAMES_CURRENT_SUMMONER_RANKS = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${process.env.REACT_APP_RIOT_GAMES_API_KEY}`;

// Spotify (need dev account)

export const SPOTIFY_USER_DATA = `https://api.spotify.com/v1/me/top/tracks?limit=5`;

// StackOverflow (open)
// Doc: https://api.stackexchange.com/docs/users-by-ids

export const STACKOVERFLOW_USER_ID = "12458952";
export const STACKOVERFLOW_BASE_URL = "https://api.stackexchange.com/";
export const STACKOVERFLOW_USER_DATA = `${STACKOVERFLOW_BASE_URL}2.3/users/${STACKOVERFLOW_USER_ID}?order=desc&sort=reputation&site=stackoverflow`;

// Unsplash (need dev account)
// Doc: https://unsplash.com/documentation#get-a-users-public-profile

export const UNSPLASH_USER_ID = "acfromspace";
export const UNSPLASH_BASE_URL = "https://api.unsplash.com/";
export const UNSPLASH_USER_DATA = `${UNSPLASH_BASE_URL}users/${UNSPLASH_USER_ID}/statistics?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

// YouTube (need dev account)
// Doc: https://console.cloud.google.com/apis/dashboard?project=raiden-yeet
// Doc: https://developers.google.com/youtube/v3/docs/channels

export const YOUTUBE_USER_ID = "UC8esh-JWOUQFYYSHZw-3e3w";
export const YOUTUBE_BASE_URL = "https://youtube.googleapis.com/youtube/v3/";
export const YOUTUBE_SNIPPET_DATA = "snippet";
export const YOUTUBE_STATISTICS_DATA = "statistics";
export const YOUTUBE_USER_DATA = `${YOUTUBE_BASE_URL}channels?part=${YOUTUBE_SNIPPET_DATA}%2C${YOUTUBE_STATISTICS_DATA}&id=${YOUTUBE_USER_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
