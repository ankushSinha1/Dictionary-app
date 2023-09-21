import React from "react";
import Synonyms from "./Synonyms"
import "../styles/Meaning.css";

const Meaning = (props) => {
    return (<div className="Meaning container-box">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map( (definition, index) =>{
            return (
                <div key={index}>
                    <p className="definition">{index + 1}. {definition.definition}</p>
                    <p className="examples">{definition.example}</p>
                    <Synonyms synonyms={definition.synonyms}/>
                </div>
            );
        })}        
    </div>);
}
export default Meaning;