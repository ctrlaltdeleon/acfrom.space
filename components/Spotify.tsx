import { Fragment } from "react";
import { SpotifyTrackModel, TopTracks } from "../lib/types";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function Spotify() {
  const { data } = useSWR<TopTracks>("/api/spotify", fetcher);

  const link = true;

  return (
    <>
      <div className="bg-white dark:bg-ei1 border-2 border-l-8 border-slate-800 dark:border-ei2 p-4 rounded-lg w-full">
        {link && (
          <a
            aria-label={"Top 5 Tracks"}
            target="_blank"
            rel="noreferrer"
            href={"link goes here"}
          >
            <div className="flex items-center text-slate-800 dark:text-slate-200">
              {"Top 5 Tracks"}
              <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        )}
        {data &&
          data.tracks.map((track: SpotifyTrackModel, index: number) => (
            <Fragment key={index}>
              <p className="font-bold mt-1 spacing-sm text-3xl text-black dark:text-white">
                {index + 1}: "{track.title}" by {track.artist}
              </p>
            </Fragment>
          ))}
      </div>
    </>
  );
}
