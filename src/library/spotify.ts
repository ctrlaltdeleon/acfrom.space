import { SpotifyTrackModel } from "./types";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const clientSecret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN; // must be spelled as "refresh_token"

const basic = btoa(`${clientId}:${clientSecret}`);

const getAccessToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    } as any),
  });
  return response.json();
};

export const getTop5Tracks = async () => {
  const { access_token } = await getAccessToken(); // must be spelled as "access_token"
  const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = await response.json();
  const tracks = data.items.slice(0, 5).map(
    (track: any) =>
      ({
        artist: track.artists.map((artist: any) => artist.name).join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name,
      } as SpotifyTrackModel)
  );
  return tracks;
};
