import { Fragment } from "react";

import * as API from "../library/api";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR(API.UNSPLASH_USER_DATA, API.FETCHER);

  const downloads: number = data?.downloads?.total;
  const views: number = data?.views?.total;

  return (
    <Fragment>
      <h2>Unsplash</h2>
      <p>Downloads: {downloads}</p>
      <p>Views: {views}</p>
    </Fragment>
  );
}
