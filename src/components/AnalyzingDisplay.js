import React from "react";
import { fixDate, formatStr } from "../utils/functions";

const AnalyzingDisplay = ({
    song: { name, album, artist, imageURL, playedAt, countIndex },
}) => {
    return (
        <div className="tan d-flex justify-content-center align-items-center text-center content-body">
            <div>
                <h2 className="bold mt-5">
                    Analyzing{" "}
                    <span className="tan pinkish review-number bold">
                        {countIndex}/20
                    </span>
                </h2>
                <div>
                    <img className="album-cover" src={imageURL} />
                </div>
                <h2 className="bold mt-3">{formatStr(name)}</h2>
                <h3>{formatStr(artist)}</h3>
                <h4>{formatStr(album)}</h4>
                <h4 className="pinkish">{fixDate(playedAt)}</h4>
            </div>
        </div>
    );
};
export default AnalyzingDisplay;
