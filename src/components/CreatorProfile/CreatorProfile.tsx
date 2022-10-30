import React from 'react';
import { Links } from '../../types';
import './CreatorProfile.css';

interface Props {
    nameImg: string;
    profileImg: string;
    title: string;
    links: Links[];
}

const CreatorProfile: React.FC<Props> = ({
    nameImg,
    profileImg,
    title,
    links,
}) => {
    const creatorLinks: JSX.Element[] = links.map((link: Links) => {
        return (
            <a href={link.href} className="links-icon">
                <img alt="Link" src={link.img} />
            </a>
        );
    });

    return (
        <div className="profile">
            <img alt="Creator name" src={nameImg} className="svg-img" />
            <img alt="Creator profile" src={profileImg} className="svg-img" />
            <h2>{title}</h2>
            {creatorLinks}
        </div>
    );
};

export default CreatorProfile;
