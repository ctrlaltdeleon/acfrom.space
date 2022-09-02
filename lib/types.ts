export type ChampionMasteryModel = {
  name: string;
  title: string;
  championPoints: number;
};

export type StackOverflowModel = {
  link: string;
  reputation: number;
};

export type SpotifyTrackModel = {
  artist: string;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: SpotifyTrackModel[];
};

export type UnsplashModel = {
  downloads: number;
  views: number;
};

export type YouTubeModel = {
  linkId: string;
  subscribers: number;
  videos: number;
  views: number;
};
