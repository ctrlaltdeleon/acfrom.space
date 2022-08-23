import "./styles/global.css";
import Spline from "@splinetool/react-spline";

import LeagueOfLegendsMastery from "./dashboard/LeagueOfLegends";
import StackOverflow from "./dashboard/StackOverflow";
import Unsplash from "./dashboard/Unsplash";
import YouTube from "./dashboard/YouTube";
import Spotify from "./dashboard/Spotify";

function App() {
  return (
    <div className="dark">
      <div className="dark:bg-ei1">
        <Spline
          scene="https://prod.spline.design/kLqFsBUt8Bu4wUeV/scene.splinecode"
          style={{
            height: "30vh",
          }}
        />
        hi this is andrew's website
        <LeagueOfLegendsMastery />
        <StackOverflow />
        <Unsplash />
        <YouTube />
        <Spotify />
      </div>
    </div>
  );
}

export default App;
