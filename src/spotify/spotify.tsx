import { Fragment, useEffect, useState } from "react";

import { getTop5Tracks } from "./spotify-functions";

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
      <h1>Top 5 Spotify Tracks</h1>
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
