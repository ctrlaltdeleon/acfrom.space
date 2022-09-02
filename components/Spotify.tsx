import { Fragment } from "react";
import { SpotifyTrackModel, TopTracks } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function Spotify() {
  const { data } = useSWR<TopTracks>("/api/spotify", fetcher);

  return (
    <>
      <div className="text-lg font-medium text-sky-500">
        Top 5 Spotify Tracks
      </div>
      {data &&
        data.tracks.map((track: SpotifyTrackModel, index: number) => (
          <Fragment key={index}>
            <p>
              Rank {index + 1}: "{track.title}" by {track.artist}
            </p>
          </Fragment>
        ))}
    </>
  );
}
