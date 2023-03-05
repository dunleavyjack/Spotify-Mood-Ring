import { MoodName } from './moodNames.types';

export interface Mood {
    name: MoodName;
    breakdown: MoodBreakdown;
}

export interface MoodBreakdown {
    emotionalFeatures: EmotionalFeature[];
    quantitativeFeatures: QuantitativeFeature[];
}

export interface Feature {
    name: string;
    value: number;
}

export interface QuantitativeFeature extends Feature {
    averageKey?: string;
}

export interface EmotionalFeature extends Feature {
    difference: PercentDifference;
}

export interface PercentDifference {
    percent: number;
    percentString: string;
}
