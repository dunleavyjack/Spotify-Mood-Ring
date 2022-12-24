export interface EmojisInterface {
    readonly 'more happiness': string;
    readonly 'less happiness': string;
    readonly 'higher danceability': string;
    readonly 'lower danceability': string;
    readonly 'higher energy': string;
    readonly 'lower energy': string;
    readonly 'more acousticness': string;
    readonly 'less acousticness': string;
    readonly tempo: string;
    readonly you: string;
}

export const emojis: EmojisInterface = {
    'more happiness': '🐶',
    'less happiness': '🥺',
    'higher danceability': '🕺',
    'lower danceability': '🛌',
    'higher energy': '⚡',
    'lower energy': '😴',
    'more acousticness': '🌿',
    'less acousticness': '🎸',
    tempo: '', // blank (no emoji)
    you: '', // blank (no emoji)
};

// TODO: SWITCH TI USING THE BELOW METHOD
export const MORE_HAPPINESS = 'more happiness';
export const LESS_HAPPINESS = 'less happiness';
export const HIGHER_DANCEABILITY = 'higher danceability';
export const LOWER_DANCEABILITY = 'lower danceability';
export const HIGHER_ENERGY = 'higher energy';
export const LOWER_ENERGY = 'lower energy';
export const MORE_ACOUSTIC = 'more acousticness';
export const LOWER_ACOUSTIC = 'lower acousticness';
export const TEMPO = ''; // Intentionally blank (no emoji)
export const YOU = ''; // Intentionally blank (no emoji)

export enum emoji {
    MORE_HAPPINESS = '🐶',
    LESS_HAPPINESS = '🥺',
    HIGHER_DANCEABILITY = '🕺',
    LOWER_DANCEABILITY = '🛌',
    HIGHER_ENERGY = '⚡',
    LOWER_ENERGY = '😴',
    MORE_ACOUSTIC = '🌿',
    LOWER_ACOUSTIC = '🎸',
}
