import React from 'react';
import { Synth as ToneSynth } from 'tone';
import synth from '../../assets/synth/synth.svg';
import './Synth.css';

interface Props {
    note: string;
}

const Synth: React.FC<Props> = ({ note }) => {
    const playableSynth = new ToneSynth().toDestination();

    const playTone = (): void => {
        playableSynth.triggerAttackRelease(note, '4n');
    };

    return (
        <section className="synth-container">
            <h3>
                <span>{note.replace('4', '')} </span>Average Key
            </h3>
            <img src={synth} alt="Synth" className="synth" />
            <div className="synth-button-container">
                <button className="synth-button" onClick={() => playTone()}>
                    Press to listen to your mood sound
                </button>
            </div>
        </section>
    );
};

export default Synth;
