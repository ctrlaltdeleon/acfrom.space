import { Fragment } from "react";
import useSWR from "swr";

import * as Constants from "../Constants";

export default function StackOverflow() {
  const { data, error } = useSWR(
    Constants.STACKOVERFLOW_USER_DATA,
    Constants.FETCHER
  );

  if (error) console.log("ERROR!");
  if (!data) console.log("LOADING!");

  return (
    <Fragment>
      <h1>StackOverflow</h1>
      <p>Reputation: {data?.items[0]?.reputation}</p>
    </Fragment>
  );
}
