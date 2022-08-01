import React from "react";

export default function StackOverflow() {
  console.log(
    fetch("https://reqres.in/api/users", {
      method: "POST", // ac***
      headers: {
        "Content-Type": "application/json", // ac***
      },
      body: JSON.stringify({
        // ac***
        name: "User 1",
      }),
    })
      .then((result) => {
        result.ok ? console.log("SUCCESS!") : console.log("FAILURE!"); // ac***
        return result.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("ERROR!"))
  );

  return <div>yee haw</div>;
}
