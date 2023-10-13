type CommonFeature = {
  featureName: string;
  averageValue: number;
};

export type InterpretiveFeature = CommonFeature & {
  percentDifference: number;
  percentDifferenceString: string;
};

export type TechnicalFeature = CommonFeature & {
  averageNotatedKey?: string;
};

export type AudioFeature = {
  danceability: number;
  acousticness: number;
  energy: number;
  valence: number;
  tempo: number;
  key: number;
};
