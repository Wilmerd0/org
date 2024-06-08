import "./Team.css"
import Colaborador from "../Colaborador"

const Team = (props) => {

    const { colorPrimario, colorSecundario, titulo, } = props.datos
    const { colaboradores } = props

    const obj = {
        backgroundColor: colorSecundario
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }


    return <>
    { 
        colaboradores.length > 0 &&
        <section className="team" style={obj}>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="collaborator">
                {
                    colaboradores.map ( (colaborador,index) => <Colaborador datos={colaborador} key={index}
                    colorPrimario={colorPrimario}/>)
                }
            </div>
        </section>
    }</>
}

export default Team