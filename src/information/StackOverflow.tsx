import { Fragment } from "react";
import useSWR from "swr";

import * as Constants from "../Routes";

export default function StackOverflow() {
  const { data, error } = useSWR(
    Constants.STACKOVERFLOW_USER_DATA,
    Constants.FETCHER
  );

  if (error) console.log("ERROR!");

  return (
    <Fragment>
      <h1>StackOverflow</h1>
      <p>Reputation: {data?.items[0]?.reputation}</p>
    </Fragment>
  );
}
