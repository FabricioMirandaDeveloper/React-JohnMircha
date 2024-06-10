export default function Propiedades(props) {
    return(
        <>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdadero" : "Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{`${props.objeto.nombre} ${props.objeto.edad}`}</li>
            <li>{props.elementoReact}</li>
            <li>{props.arreglo.map(props.funciones).join(", ")}</li>
            <li>{props.componenteReact}</li>
        </ul>
        </>
    ) 
}

Propiedades.defaultProps = {
    porDefecto: "LasProps"
}