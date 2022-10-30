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
