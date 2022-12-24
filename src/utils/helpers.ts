import { AudioFeatures, EmotionalFeatures } from '../types';
import expressiveMoodImage from '../assets/moods/moodExpressive.svg';
import blueMoodImage from '../assets/moods/moodBlue.svg';
import elatedMoodImage from '../assets/moods/moodElated.svg';
import electricMoodImage from '../assets/moods/moodElectric.svg';
import gloomyMoodImage from '../assets/moods/moodGloomy.svg';
import melancholicMoodImage from '../assets/moods/moodMelancholic.svg';
import nervousMoodImage from '../assets/moods/moodNervous.svg';
import peacefulMoodImage from '../assets/moods/moodPeaceful.svg';
import reflectiveMoodImage from '../assets/moods/moodReflective.svg';
import sleepyMoodImage from '../assets/moods/moodSleepy.svg';
import tenseMoodImage from '../assets/moods/moodTense.svg';

export const limitStringLength = (str: string) => {
    if (str?.length > 18) {
        return str.substring(0, 18) + '...';
    } else {
        return str;
    }
};

export const emotionalFeatureNames: string[] = [
    'danceability',
    'energy',
    'valence',
];

export const isolatedEmotionalFeatureNames: string[] = ['acousticness'];

export const standardFeatureNames: string[] = ['tempo', 'key'];

export const getAverageValue = (
    audioFeatures: AudioFeatures[],
    featureName: string
): number => {
    return (
        audioFeatures.reduce(
            (total: number, next: AudioFeatures) =>
                total + next[featureName as keyof typeof next],
            0
        ) / audioFeatures.length
    );
};

export const getPercentDifference = (averageValue: number): number => {
    return ((averageValue - 0.5) / 0.5) * 100;
};

export const getPercentDifferenceString = (
    featureName: string,
    percentDifference: number
): string => {
    switch (featureName) {
        case 'danceability':
            return percentDifference > 0
                ? 'higher danceability'
                : 'lower danceability';
        case 'energy':
            return percentDifference > 0 ? 'higher energy' : 'lower energy';
        case 'valence':
            return percentDifference > 0 ? 'more happiness' : 'less happiness';
        case 'acousticness':
            return percentDifference > 0
                ? 'more acousticness'
                : 'less acousticness';
        default:
            return '';
    }
};

export const getMatchedMood = (
    firstEmotionalFeature: EmotionalFeatures,
    secondEmotionalFeature: EmotionalFeatures
): string => {
    const emotionalFeatures: string[] = [
        firstEmotionalFeature.percentDifferenceString,
        secondEmotionalFeature.percentDifferenceString,
    ];

    if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'peaceful';
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'reflective';

        // Matching: Higher + Lower (Danceability)
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('less happiness')
    ) {
        return 'melancholic';
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'a bit tense';

        // Matching: Higher + Lower (Energy)
    } else if (
        emotionalFeatures.includes('higher energy') &&
        emotionalFeatures.includes('less happiness')
    ) {
        return 'a bit gloomy';
    } else if (
        emotionalFeatures.includes('higher energy') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'nervous';

        // Matching: Higher + Higher (All)
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('higher danceability')
    ) {
        return 'expressive';
    } else if (
        emotionalFeatures.includes('more happiness') &&
        emotionalFeatures.includes('higher energy')
    ) {
        return 'elated';
    } else if (
        emotionalFeatures.includes('higher danceability') &&
        emotionalFeatures.includes('higher energy')
    ) {
        return 'electric';

        // Matching: Lower + Lower (All)
    } else if (
        emotionalFeatures.includes('less happiness') &&
        emotionalFeatures.includes('lower danceability')
    ) {
        return 'a little blue';
    } else if (
        emotionalFeatures.includes('less happiness') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'a bit gloomy';
    } else if (
        emotionalFeatures.includes('lower danceability') &&
        emotionalFeatures.includes('lower energy')
    ) {
        return 'sleepy';
    }
    return 'confused';
};

export const getMoodImageURL = (mood: string) => {
    switch (mood) {
        case 'peaceful':
            return peacefulMoodImage;
        case 'reflective':
            return reflectiveMoodImage;
        case 'melancholic':
            return melancholicMoodImage;
        case 'a bit tense':
            return tenseMoodImage;
        case 'a bit gloomy':
            return gloomyMoodImage;
        case 'nervous':
            return nervousMoodImage;
        case 'expressive':
            return expressiveMoodImage;
        case 'elated':
            return elatedMoodImage;
        case 'electric':
            return electricMoodImage;
        case 'a little blue':
            return blueMoodImage;
        case 'sleepy':
            return sleepyMoodImage;
        default:
            return expressiveMoodImage;
    }
};

export const getAverageNotatedKey = (averageValue: number): string => {
    switch (Math.round(averageValue)) {
        case 0:
            return 'C4';
        case 1:
            return 'C#4';
        case 2:
            return 'D4';
        case 3:
            return 'D#4';
        case 4:
            return 'E4';
        case 5:
            return 'F4';
        case 6:
            return 'F#4';
        case 7:
            return 'G4';
        case 8:
            return 'G#4';
        case 9:
            return 'A4';
        case 10:
            return 'A#4';
        case 11:
            return 'B4';
        default:
            return 'C4';
    }
};
