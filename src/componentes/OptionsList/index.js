import "./OptionList.css";

const OptionList = (props)=>{


    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)}
        </select>
        </div>
}

export default OptionList