import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

const Results = (props)  =>{
    if (props.results) {
        return (
            <div>
                <div className="container-box results">
                    <h2>{props.results.word}</h2>
                    <p className="phonetic-text">{props.results.phonetic}</p>
                    {props.results.phonetics.map((phonetic, index) => {
                        if (index  < 1) {
                            return (
                                <div key={index}>
                                    <Phonetic phonetic={phonetic} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
                {props.results.meanings.map((meaning, index) => {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
  
}
export default Results