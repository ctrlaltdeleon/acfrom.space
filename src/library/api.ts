// SWR (stale-while-revalidate)
// Doc: https://swr.vercel.app

export const FETCHER = (url: string) => fetch(url).then((res) => res.json());

// Riot Games (need dev account)
// Doc: https://developer.riotgames.com/docs/lol

export const RIOT_GAMES_ENCRYPTED_SUMMONER_ID =
  "i9XfHa3-PcT6SFzN-NFPrXJ4wbhhLYU9slHkn8kVp6EPTHE";
export const RIOT_GAMES_API_KEY_URL = `?api_key=${process.env.REACT_APP_RIOT_GAMES_API_KEY}`;
export const RIOT_GAMES_CURRENT_SUMMONER_RANKS = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${RIOT_GAMES_ENCRYPTED_SUMMONER_ID}${RIOT_GAMES_API_KEY_URL}`;
export const RIOT_GAMES_SUMMONER_MASTERY = `https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${RIOT_GAMES_ENCRYPTED_SUMMONER_ID}${RIOT_GAMES_API_KEY_URL}`;

// Spotify (need dev account)
// this one was really annoying

export const SPOTIFY_TOP_5_TRACKS = `https://api.spotify.com/v1/me/top/tracks?limit=5`;
