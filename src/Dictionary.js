import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Define from "./Define";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("dictionary");
    let [define, setDefine] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
    function search() {
        //https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleResponse(response) {
        setDefine(response.data[0]);
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value); //update state
      }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} />
                </form>
            </section>
            <Define define={define} />
        </div>
    );  
    } else {
        load();
        return "LOADING...";
    }
}
