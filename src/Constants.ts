// API Call: https://api.stackexchange.com/2.3/users/12458952?order=desc&sort=reputation&site=stackoverflow
// Doc: https://api.stackexchange.com/docs/users-by-ids

export const STACKOVERFLOW_USER_ID = "12458952";
export const STACKOVERFLOW_BASE_URL = "https://api.stackexchange.com/";
export const STACKOVERFLOW_USER_DATA = `${STACKOVERFLOW_BASE_URL}2.3/users/${STACKOVERFLOW_USER_ID}?order=desc&sort=reputation&site=stackoverflow`;
export const FETCHER = (url: string) => fetch(url).then((res) => res.json());
