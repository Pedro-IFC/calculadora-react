import React from "react";
import './botao.css';


var botao = props=>{
    var classe = "Button";
    if(props.className){
        classe+=" "+props.className
    }
    /*if(isNaN(parseInt(props.label))){
        classe+=" operation"
    }*/
    return <>
        <button className={classe} onClick={e=> props.click && props.click(props.label) }>{props.label}</button>
    </>
}

export default botao;