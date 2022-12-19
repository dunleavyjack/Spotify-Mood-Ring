import { AudioFeatures, Songs } from '../../types';

export type SongsState = {
    recentSongs: Songs[];
    audioFeatures: AudioFeatures[];
};
