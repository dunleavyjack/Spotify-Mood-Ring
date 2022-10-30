export interface SpotifyAccessToken {
    access_token: string;
    token_type: string;
    expires_in: string;
}

export interface User {
    userName: string | undefined;
    imageURL: string;
}

export interface Songs {
    name: string;
    album: string;
    artist: string;
    imageURL: string;
    playedAt: string;
    id: string;
}

export interface AudioFeatures {
    danceability: number;
    acousticness: number;
    energy: number;
    valence: number;
    tempo: number;
    key: number;
}

export interface SongsAndAudioFeatures {
    songs: Songs[];
    audioFeatures: AudioFeatures[];
}

export interface EmotionalFeatures {
    featureName: string;
    averageValue: number;
    percentDifference: number;
    percentDifferenceString: string;
}

export interface StandardFeatures {
    featureName: string;
    averageValue: number;
    averageNotatedKey?: string;
}

export interface Mood {
    mood: string;
    moodImageURL: string;
    emotionalFeatures: EmotionalFeatures[];
    standardFeatures: StandardFeatures[];
}

export interface Links {
    href: string;
    img: string;
}
