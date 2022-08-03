import React, { useState } from "react";

const base = "https://api.stackexchange.com/";
const stackOverflowUser = "12458952";
const pathURL = `2.3/users/${stackOverflowUser}?order=desc&sort=reputation&site=stackoverflow`;

export default function Unsplash() {
  const url = base + pathURL;
  const [totalReputation, setTotalReputation] = useState<number>();

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("SUCCESS!", data);
      setTotalReputation(data.items[0].reputation);
    })
    .catch((error) => console.log("ERROR!", error));

  return <div>StackOverflow total reputation: {totalReputation}</div>;
}
