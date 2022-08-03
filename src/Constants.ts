export const FETCHER = (url: string) => fetch(url).then((res) => res.json());

// Stackoverflow
// API Call: https://api.stackexchange.com/2.3/users/12458952?order=desc&sort=reputation&site=stackoverflow
// Doc: https://api.stackexchange.com/docs/users-by-ids

export const STACKOVERFLOW_USER_ID = "12458952";
export const STACKOVERFLOW_BASE_URL = "https://api.stackexchange.com/";
export const STACKOVERFLOW_USER_DATA = `${STACKOVERFLOW_BASE_URL}2.3/users/${STACKOVERFLOW_USER_ID}?order=desc&sort=reputation&site=stackoverflow`;

// Unsplash

export const UNSPLASH_USER_ID = "acfromspace";
export const UNSPLASH_BASE_URL = "https://api.unsplash.com/";
export const UNSPLASH_USER_DATA = `${UNSPLASH_BASE_URL}users/${UNSPLASH_USER_ID}/statistics?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
