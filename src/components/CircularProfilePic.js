import React from "react";

const CircularProfilePic = ({ imageURL }) => {
    return (
        <div className="circular--portrait mx-auto mt-5 p-0 container">
            <img src={imageURL} />
        </div>
    );
};

export default CircularProfilePic;
