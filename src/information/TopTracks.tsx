import useSWR from "swr";

import fetcher from "./fetcher";
import { TopTracks } from "./types";
import Track from "./Track";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {data.tracks.map((track: any, index: any) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
