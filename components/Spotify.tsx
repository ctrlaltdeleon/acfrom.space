import { Fragment } from "react";
import { SpotifyTrackModel } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function Spotify() {
  const { data } = useSWR<SpotifyTrackModel[]>("/api/spotify", fetcher);

  console.log("ac*** data", data);

  return (
    <>
      <div className="text-lg font-medium text-sky-500">
        Top 5 Spotify Tracks
      </div>
      {data &&
        data.map((track: SpotifyTrackModel, index: number) => (
          <Fragment key={index}>
            <p>
              Rank {index + 1}: "{track.title}" by {track.artist}
            </p>
          </Fragment>
        ))}
    </>
  );
}
