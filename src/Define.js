import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Define(props) { 
   if (props.define) {
    return( 
        <div className="Define">
            <section>
            <h2>
                {props.define.word}
            </h2>
            {props.define.phonetics.map(function (phonetic, index) {   
               return (
                    <div key={index}>
                     <Phonetic phonetic={phonetic} />
                    </div>
                );
            })}
            </section>
                {props.define.meanings.map(function (meaning, index) {       
            return(
                <section key={index}>
                         <Meaning meaning={meaning} />
                </section>
                    );
                })}
        </div>
                );
            } else{
                return null;
            }
        }
        