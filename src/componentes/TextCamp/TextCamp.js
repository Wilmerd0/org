import { useState } from "react";
import "./TextCamp.css"

const TextCamp = (props)=>{
    const placeholderModificado = `${props.placeholder}...`;

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.value}
            onChange={manejarCambio}
        />
    </div>
}

export default TextCamp