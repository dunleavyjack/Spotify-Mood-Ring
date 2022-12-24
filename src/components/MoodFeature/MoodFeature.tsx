import React from 'react';
import './MoodFeature.css';
import { emojis, EmojisInterface } from '../../constants/emojis';

interface Props {
    feature: string;
    percent: string;
}

const MoodFeature: React.FC<Props> = ({ feature, percent }) => {
    if (feature === 'bpm' || feature === 'You 😇') {
        return (
            <section className="mood-feature-container-right">
                <h2 hidden>Mood Analytic description</h2>
                <h3 className="mood-feature-percent-right">{percent}</h3>
                <h4 className="mood-feature-name-right">{feature}</h4>
            </section>
        );
    }

    return (
        <section className="mood-feature-container">
            <h2 hidden>Mood Analytic description</h2>
            <h3 className="mood-feature-emoji">
                {emojis[feature.toLowerCase() as keyof EmojisInterface]}
            </h3>
            <h3 className="mood-feature-percent">{percent}</h3>
            <h4 className="mood-feature-name">{feature}</h4>
        </section>
    );
};

export default MoodFeature;
