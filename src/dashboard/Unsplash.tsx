import { getUnsplashUserPublicProfile } from "../library/unsplash";
import { ERROR_NUMBER, MY_USERNAME } from "../library/reusables";
import { UnsplashModel } from "../library/types";
import useSWR from "swr";

export default function StackOverflow() {
  const { data } = useSWR<UnsplashModel>(
    MY_USERNAME,
    getUnsplashUserPublicProfile
  );

  const downloads: number = data?.downloads ?? ERROR_NUMBER;
  const views: number = data?.views ?? ERROR_NUMBER;

  return (
    <>
      <div className="text-lg font-medium text-sky-500">Unsplash</div>
      <p>Downloads: {downloads}</p>
      <p>Views: {views}</p>
    </>
  );
}
