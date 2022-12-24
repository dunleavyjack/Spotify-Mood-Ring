import React from 'react';
import { limitStringLength } from '../../utils/helpers';
import { Songs } from '../../types';
import analyzingMusicText from '../../assets/pageAssets/dashboard/analyzingMusicText.png';
import backgroundRing from '../../assets/pageAssets/dashboard/albumCoverBackgroundRing.png';
import './SongDisplay.css';

interface Props {
    song: Songs;
}

const SongDisplay: React.FC<Props> = ({
    song: { name = '', album = '', artist = '', imageURL = '' },
}) => {
    return (
        <main className="page-content">
            <img
                alt="Analyzing music"
                src={analyzingMusicText}
                className="analyzing-music"
            />
            <section className="album-cover-container">
                <img
                    alt="AlbumName cover"
                    src={imageURL}
                    className="album-cover"
                />
                <img
                    alt="Album cover decoration"
                    src={backgroundRing}
                    className="album-cover-decoration"
                />
            </section>
            <section className="song-info">
                <h1 className="song-name">{limitStringLength(name)}</h1>
                <h2 className="artist-name">{limitStringLength(artist)}</h2>
                <h3 className="album-name">{limitStringLength(album)}</h3>
            </section>
        </main>
    );
};

export default SongDisplay;
