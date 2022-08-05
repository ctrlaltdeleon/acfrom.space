import { Fragment } from "react";
import useSWR from "swr";

import * as Constants from "../Constants";

export default function YouTube() {
  const { data, error } = useSWR(
    Constants.YOUTUBE_USER_DATA,
    Constants.FETCHER
  );

  if (error) console.log("ERROR!");
  if (!data) console.log("LOADING!");

  return (
    <Fragment>
      <h1>YouTube</h1>
      <p>Subscribers: {data?.items[0]?.statistics?.subscriberCount}</p>
      <p>Videos made: {data?.items[0]?.statistics?.videoCount}</p>
      <p>Video views: {data?.items[0]?.statistics?.viewCount}</p>
    </Fragment>
  );
}
