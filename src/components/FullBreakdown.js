import React from "react";
import AddDisplayWhite from "./AddDisplayWhite";
import AddDisplayPink from "./AddDisplayPink";
import { fixCapitalization } from "../utils/functions";

const FullBreakdown = ({ mood }) => {
    return (
        <div className="whiteish d-flex justify-content-center align-items-center text-center black-body">
            <div className="black-body">
                <h2 className="bold mt-5 mb-5 tan-font">Your Full Breakdown</h2>
                <AddDisplayWhite
                    label={fixCapitalization(mood.firstMood.mood)}
                    percent={mood.firstMood.difference.toFixed(2) + "%"}
                />
                <AddDisplayPink
                    label={fixCapitalization(mood.secondMood.mood)}
                    percent={mood.secondMood.difference.toFixed(2) + "%"}
                />
                <AddDisplayWhite
                    label={fixCapitalization(mood.thirdMood.mood)}
                    percent={mood.thirdMood.difference.toFixed(2) + "%"}
                />
                <AddDisplayPink
                    label={fixCapitalization(mood.acousticnessDifference.mood)}
                    percent={
                        mood.acousticnessDifference.difference.toFixed(2) + "%"
                    }
                />
                <AddDisplayWhite label={"Average Key"} percent={mood.key} />
                <AddDisplayPink label={"Average Tempo"} percent={mood.tempo} />
                <AddDisplayWhite label={"You"} percent={"100%"} />
            </div>
        </div>
    );
};

export default FullBreakdown;
