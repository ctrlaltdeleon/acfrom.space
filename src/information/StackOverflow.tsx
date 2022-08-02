import React, { useState } from "react";

const base = "https://api.stackexchange.com/";
const stackOverflowUser = "12458952";
const pathURL = `2.3/users/${stackOverflowUser}?order=desc&sort=reputation&site=stackoverflow`;

export default function StackOverflow() {
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

/**
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc. (READ, CREATE, UPDATE, DELETE)
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
*/
