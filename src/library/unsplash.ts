// unsplash (need dev account)
// doc: https://unsplash.com/documentation#get-a-users-public-profile

import { UnsplashModel } from "./types";

export const getUnsplashUserPublicProfile = async (userId: string) => {
  const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const res = await fetch(
    `https://api.unsplash.com/users/${userId}/statistics?client_id=${accessKey}`
  );
  const data = await res.json();
  return {
    downloads: data.downloads.total,
    views: data.views.total,
  } as UnsplashModel;
};
