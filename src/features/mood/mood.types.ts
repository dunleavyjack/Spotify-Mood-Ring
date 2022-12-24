import { Songs, AudioFeatures } from '../../features/songs/songs.types';

export interface Mood {
    mood: string;
    moodImageURL: string;
    emotionalFeatures: EmotionalFeatures[];
    standardFeatures: StandardFeatures[];
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
