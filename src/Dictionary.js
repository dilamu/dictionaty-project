import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Definitions from "./Definitions";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [definitions, setDefinitions] = useState({});

    function handleResponse(response) {
        console.log(response.data[0]);
        setDefinitions(response.data[0]);

    }
    
    function handleKeyword(event) {
        console.log(event);
        setKeyword(event.target.value);
      }

    function search(event){
        event.preventDefault();

        //https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
      

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword} />
    
            </form>
            <Definitions Definition={Definitions} />
        </div>
    );
}