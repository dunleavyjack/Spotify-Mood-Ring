import { InterpretiveFeature, TechnicalFeature } from './AudioFeatures.types';

export type Mood = {
  mood: string;
  moodImageURL: string;
  interpretiveFeatures: InterpretiveFeature[];
  technicalFeatures: TechnicalFeature[];
};
