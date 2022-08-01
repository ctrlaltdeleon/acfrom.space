import React from "react";

export default function StackOverflow() {
  console.log(
    fetch("https://reqres.in/api/users")
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("ERROR!"))
  );

  return <div>yee haw</div>;
}
