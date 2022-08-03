import { Fragment } from "react";
import useSWR from "swr";

import * as Constants from "../Constants";

export default function StackOverflow() {
  const { data, error } = useSWR(
    Constants.UNSPLASH_USER_DATA,
    Constants.FETCHER
  );

  if (error) console.log("ERROR!");
  if (!data) console.log("LOADING!");

  return (
    <Fragment>
      <h1>Unsplash</h1>
      <p>Views: {data?.views?.total}</p>
      <p>Downloads: {data?.downloads?.total}</p>
    </Fragment>
  );
}
