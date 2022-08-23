// stack-overflow (open api)
// doc: https://api.stackexchange.com/docs/users-by-ids

import { StackOverflowModel } from "./types";

export const getStackOverflowUserData = async (userId: string) => {
  const res = await fetch(
    `https://api.stackexchange.com/2.3/users/${userId}?order=desc&sort=reputation&site=stackoverflow`
  );
  const data = await res.json();
  return {
    link: data.items[0].link,
    reputation: data.items[0].reputation,
  } as StackOverflowModel;
};
