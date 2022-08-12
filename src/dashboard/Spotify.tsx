import { Fragment, useEffect, useState } from "react";

import * as API from "../library/api";

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

const basic = btoa(`${client_id}:${client_secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
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

const getTop5Tracks = async () => {
  const { access_token } = await getAccessToken();
  const response = await fetch(API.SPOTIFY_TOP_5_TRACKS, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  const { items } = await response.json();
  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));
  return tracks;
};

export default function Spotify() {
  const [tracks, setTracks] = useState<any>([]);

  useEffect(() => {
    const response = getTop5Tracks();
    response.then((result) => {
      setTracks(result);
    });
  }, []);

  return (
    <Fragment>
      <h2>Top 5 Spotify Tracks</h2>
      {tracks.map((track: any, index: any) => (
        <Fragment key={index}>
          <p>
            {index + 1} "{track.title}" by {track.artist}
          </p>
        </Fragment>
      ))}
    </Fragment>
  );
}
