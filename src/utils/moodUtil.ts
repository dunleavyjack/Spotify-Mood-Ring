import {
    emotionalFeatureNames,
    isolatedEmotionalFeatureNames,
    standardFeatureNames,
    getAverageValue,
    getPercentDifference,
    getPercentDifferenceString,
    getMatchedMood,
    getMoodImageURL,
    getAverageNotatedKey,
} from './helpers';
import {
    AudioFeatures,
    EmotionalFeatures,
    StandardFeatures,
    Mood,
} from '../types';

export const calculateMood = (audioFeatures: AudioFeatures[]): Mood => {
    const emotionalFeatures: EmotionalFeatures[] = emotionalFeatureNames.map(
        (featureName: string) => {
            const averageValue: number = getAverageValue(
                audioFeatures,
                featureName
            );
            const percentDifference: number =
                getPercentDifference(averageValue);

            const percentDifferenceString: string = getPercentDifferenceString(
                featureName,
                percentDifference
            );
            return {
                featureName,
                averageValue,
                percentDifference: Math.abs(percentDifference),
                percentDifferenceString,
            };
        }
    );

    const isolatedEmotionalFeatures: EmotionalFeatures[] =
        isolatedEmotionalFeatureNames.map((featureName: string) => {
            const averageValue: number = getAverageValue(
                audioFeatures,
                featureName
            );
            const percentDifference: number =
                getPercentDifference(averageValue);

            const percentDifferenceString: string = getPercentDifferenceString(
                featureName,
                percentDifference
            );
            return {
                featureName,
                averageValue,
                percentDifference: Math.abs(percentDifference),
                percentDifferenceString,
            };
        });

    const sortedEmotionalFeatures: EmotionalFeatures[] = emotionalFeatures.sort(
        (a: EmotionalFeatures, b: EmotionalFeatures) =>
            Math.abs(b.percentDifference) - Math.abs(a.percentDifference)
    );

    const allEmotionalFeatures = sortedEmotionalFeatures.concat(
        isolatedEmotionalFeatures
    );

    const [firstEmotionalFeature, secondEmotionalFeature] =
        sortedEmotionalFeatures;

    const mood: string = getMatchedMood(
        firstEmotionalFeature,
        secondEmotionalFeature
    );

    const moodImageURL: string = getMoodImageURL(mood);

    const standardFeatures: StandardFeatures[] = standardFeatureNames.map(
        (featureName: string) => {
            const averageValue: number = getAverageValue(
                audioFeatures,
                featureName
            );

            if (featureName === 'key') {
                const averageNotatedKey: string =
                    getAverageNotatedKey(averageValue);
                return { featureName, averageValue, averageNotatedKey };
            }
            return { featureName, averageValue };
        }
    );

    const calculatedMood: Mood = {
        mood,
        moodImageURL,
        emotionalFeatures: allEmotionalFeatures,
        standardFeatures,
    };

    return calculatedMood;
};
