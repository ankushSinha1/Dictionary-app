import React from "react";
import "../styles/Synonyms.css"
const Synonyms = (props) =>{
    if (props.synonyms) {
        return (
            <ul className="Synonyms list-inline">
                {props.synonyms.map((synonym, index) => {
                    return (
                        <li className="list-inline-item" key={index}>
                            {synonym}
                        </li>
                    )
                })}
            </ul>
        ); 
    } else {
        return null;
    }   
}
export default Synonyms;