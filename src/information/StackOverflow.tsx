import { useState } from "react";
import useSWR from "swr";

import * as Constants from "../Constants";

export default function StackOverflow() {
  const { data, error } = useSWR(
    Constants.STACKOVERFLOW_USER_DATA,
    Constants.FETCHER
  );
  const [totalReputation, setTotalReputation] = useState<number>(
    data.items[0].reputation
  );

  if (error) console.log("An error has occurred!");
  if (!data) console.log("Loading");

  return <div>StackOverflow total reputation: {totalReputation}</div>;
}
