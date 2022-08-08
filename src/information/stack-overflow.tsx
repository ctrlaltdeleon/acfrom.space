import { Fragment } from "react";

import * as API from "../library/api";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR(API.STACKOVERFLOW_USER_DATA, API.FETCHER);

  const reputation: number = data?.items[0]?.reputation;

  return (
    <Fragment>
      <h2>StackOverflow</h2>
      <p>Reputation: {reputation}</p>
    </Fragment>
  );
}
