import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "../styles/Dictionary.css";

const Dictionary = (props) => {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    const search = () =>{
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl)
        .then((response) =>{
            setResults(response.data[0]);
        }).catch((err)=>{
            setResults(null);
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        search();
    }

    const load = () =>{
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
        <div className="Dictionary">  
            <div className="container-box">
                <h1 className="header">Word lookup</h1>        
                <form onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="flex-grow-1">
                            <input 
                                onChange={(e) =>{setKeyword(e.target.value)}} 
                                type="search" 
                                placeholder="Search" 
                                autoFocus={true} 
                                className="form-control" 
                            /> 
                        </div>
                        <div className="mx-1">
                            <button value="Search" className="btn mx-1 px-3" type="submit">Search</button>
                        </div>
                    </div>
                </form>
                <div className="suggestions">Such as: moon, sunset, nature </div>
            </div>
            {results? <>
            <Results results={results} />
            </> : <>
                <div className="container-box results">
                    <h2>No results to display with this keyword</h2>
                </div>

            </>}
        </div>
        );
    } else {
        load();
        return ("Loading...");
    }
}
export default Dictionary