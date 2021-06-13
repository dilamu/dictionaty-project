import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Define from "./Define";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [define, setDefine] = useState(null);
    

    function handleResponse(response) {
        console.log(response.data[0]);
        setDefine(response.data[0]);
    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value); //update state
      }

    function search(event){
        event.preventDefault();
      //  alert(`Searching for ${keyword} definition`);
        //https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }
      
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Define define={define} />
        </div>
    );  
}