import "./styles/global.css";

import LeagueOfLegendsMastery from "./dashboard/LeagueOfLegends";
import StackOverflow from "./dashboard/StackOverflow";
import Unsplash from "./dashboard/Unsplash";
import YouTube from "./dashboard/YouTube";
import Spotify from "./dashboard/Spotify";

function App() {
  return (
    <div className="App">
      hi this is andrew's website
      <LeagueOfLegendsMastery />
      <StackOverflow />
      <Unsplash />
      <YouTube />
      <Spotify />
    </div>
  );
}

export default App;
