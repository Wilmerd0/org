import { useState } from "react"
import "./Form.css"
import TextCamp from "../TextCamp/TextCamp"
import OptionList from "../OptionsList"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, setName] = useState("")
    const [puesto, setPosition] = useState("")
    const [foto, setPhoto] = useState("")
    const [equipo, setTeam] = useState("")

    const {registrarColaborador} = props

    const manejarEnvio = (e)=>{
        e.preventDefault();
        console.log("Manejar envio",)
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <TextCamp 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                value={nombre} 
                actualizarValor={setName}
            />
            <TextCamp 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                value={puesto} 
                actualizarValor={setPosition }
            />
            <TextCamp 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                value={foto} 
                actualizarValor={setPhoto}
            />
            <OptionList 
                value={equipo} 
                actualizarEquipo={setTeam}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario