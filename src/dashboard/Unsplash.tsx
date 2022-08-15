import { getUnsplashUserPublicProfile } from "../library/unsplash";
import { ERROR_NUMBER, MY_USERNAME } from "../library/reusables";
import { Unsplash } from "../library/types";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<Unsplash>(MY_USERNAME, getUnsplashUserPublicProfile);

  const downloads: number = data?.downloads || ERROR_NUMBER;
  const views: number = data?.views || ERROR_NUMBER;

  return (
    <>
      <h2>Unsplash</h2>
      {(data && (
        <>
          <p>Downloads: {downloads}</p>
          <p>Views: {views}</p>
        </>
      )) || <></>}
    </>
  );
}
