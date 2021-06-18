import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function (definition, index)
            {
                return(
                    <div key={index}>
                        <p>
                            <strong>Definition</strong>: {""}{props.meaning.definitions[0].definition}
                            <br />
                            <em>{props.meaning.definitions[0].example}</em>
                            
                             <Synonyms synonyms={definition.synonyms}/>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}