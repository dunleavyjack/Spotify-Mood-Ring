export type SongsState = {
    recentSongs: Songs[];
    audioFeatures: AudioFeatures[];
};

export type Songs = {
    name: string;
    album: string;
    artist: string;
    imageURL: string;
    playedAt: string;
    id: string;
};

export type AudioFeatures = {
    danceability: number;
    acousticness: number;
    energy: number;
    valence: number;
    tempo: number;
    key: number;
};

export type SongsAndAudioFeatures = {
    songs: Songs[];
    audioFeatures: AudioFeatures[];
};
