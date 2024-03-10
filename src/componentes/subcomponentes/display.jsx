import React from "react";
import './display.css';


var display = props=>{
    var classe = "Display";
    if(props.className){
        classe+=" "+props.className
    }
    return <>
        <div className={classe}>
            {props.value}
        </div>
    </>
}

export default display;