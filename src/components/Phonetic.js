import React from "react";
import "../styles/Phonetic.css";

const Phonetic = (props) => {

    if (props.phonetic.audio) {
        return (
            <div className="phonetic">
                <audio className="phonetic container" controls src={props.phonetic.audio} />
            </div>
        );
    } else {
        return null;
    }
}
export default Phonetic