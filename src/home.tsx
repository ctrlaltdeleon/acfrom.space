import Spline from "@splinetool/react-spline";
import LeagueOfLegendsMastery from "./dashboard/LeagueOfLegends";
import StackOverflow from "./dashboard/StackOverflow";
import Unsplash from "./dashboard/Unsplash";
import YouTube from "./dashboard/YouTube";
import Spotify from "./dashboard/Spotify";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row items-start">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Andrew De Leon
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Software Engineer at{" "}
            <span className="font-semibold">YOUR MOM'S HOUSE</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            skippy pop dooby pop pop
          </p>
        </div>
        <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
          {/* <img
          alt="Lee Robinson"
          height={176}
          width={176}
          src="/avatar.jpg"
          sizes="30vw"
          className="rounded-full filter grayscale"
        /> */}
          <Spline
            scene="https://prod.spline.design/kLqFsBUt8Bu4wUeV/scene.splinecode"
            style={{
              height: "30vh",
            }}
          />
        </div>
      </div>
      <LeagueOfLegendsMastery />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
        <StackOverflow />
        <Unsplash />
        <YouTube />
      </div>
      <Spotify />
    </div>
  );
}
