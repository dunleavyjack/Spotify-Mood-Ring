import React from "react";

const AddDisplayPink = ({ label, percent }) => {
    return (
        <React.Fragment>
            <h4 className="bold floating pinkish">{percent}</h4>
            <h4 className="bold pinkish mt-3 mb-5">{label}</h4>
        </React.Fragment>
    );
};

export default AddDisplayPink;