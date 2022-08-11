export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type Subscribers = {
  count: number;
};

export type TopTracks = {
  tracks: Song[];
};

export type Unsplash = {
  downloads: number;
  views: number;
};

export type Views = {
  total: number;
};

export type YouTube = {
  subscriberCount: number;
  viewCount: number;
};

export type Champion = {
  key: string;
  name: string;
};
