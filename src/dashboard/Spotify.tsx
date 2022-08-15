import { Fragment } from "react";
import { getTop5Tracks } from "../library/spotify";
import { ITS_OVER_ANAKIN_I_HAVE_THE_HIGH_GROUND } from "../library/reusables";
import { SpotifyTrackModel } from "../library/types";
import useSWR from "swr";

export default function Spotify() {
  const { data } = useSWR<Array<SpotifyTrackModel>>(
    ITS_OVER_ANAKIN_I_HAVE_THE_HIGH_GROUND,
    getTop5Tracks
  );

  return (
    <>
      <h2>Top 5 Spotify Tracks</h2>
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
