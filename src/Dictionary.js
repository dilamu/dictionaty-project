import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("null");

    function search(event){
        event.preventDefault();
    }
      function handleKeyword(event) {
        console.log(event);
        setKeyword(event.target.value);
      }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeyword} />
                <a href="#" className="btn btn-primary">Search</a>
            </form>
        </div>
    );
}