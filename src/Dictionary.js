import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Define from "./Define";
import Photos from "./Photos";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("dictionary");
    let [define, setDefine] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function search() {
        //https://dictionaryapi.dev/
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    
        let pexelsApiKey = "563492ad6f91700001000001e35650279cff4670bae9d0650dcb780f";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        
        let headers = { Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, {headers: headers }).then(handlePexelsResponse);
    }
        
    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
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
                <h2 className="word"> Search for word</h2>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} />
                </form>
            </section>
            <Define define={define} />
            <Photos photos={photos} />
        </div>
    );  
    } else {
        load();
        return "LOADING...";
    }
}
