import React from "react";
import Meaning from "./Meaning";

export default function Definitions(props) {
    return(
        <div className="Definitions">
            <h2>{props.results.word}</h2>
                {props.results.meanings.map(function (meaning, index) {
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