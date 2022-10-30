import React from 'react';
import './CircularProfilePic.css';

interface Props {
    imageURL: string;
}

const CircularProfilePic: React.FC<Props> = ({ imageURL }) => {
    return (
        <section className="circular-profile-picture">
            <img src={imageURL} alt="Circular profile" />
        </section>
    );
};

export default CircularProfilePic;
