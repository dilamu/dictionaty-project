import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Define(props) { 
   if (props.define) {
    return( 
        <div className="Define">
            <h2>
                {props.define.word}
            </h2>
            {props.define.phonetics.map(function (phonetic, index) {
                return (
                    <div key={index}>
                        <Phonetic props={phonetic} />
                    </div>
                );
            })}
                {props.define.meanings.map(function (meaning, index) {       
            return(
                        <div key={index}>
                         <Meaning meaning={meaning} />
                        </div>
                    );
                })}
        </div>
                );
            } else{
                return null;
            }
        }
        