import { Fragment } from "react";

import * as API from "../library/api";
import useSWR from "swr";

export default function YouTube() {
  const { data } = useSWR(API.YOUTUBE_USER_DATA, API.FETCHER);

  const subscribers: number = data?.items[0]?.statistics?.subscriberCount;
  const videos: number = data?.items[0]?.statistics?.videoCount;
  const views: number = data?.items[0]?.statistics?.viewCount;

  return (
    <Fragment>
      <h2>YouTube</h2>
      <p>Subscribers: {subscribers}</p>
      <p>Videos made: {videos}</p>
      <p>Video views: {views}</p>
    </Fragment>
  );
}
