export default function Propiedades({
    porDefecto = "LasProps",
    cadena,
    numero,
    booleano,
    arreglo,
    objeto,
    elementoReact,
    funciones,
    componenteReact
}) {
    return(
        <>
        <h2>{porDefecto}</h2>
        <ul>
            <li>{cadena}</li>
            <li>{numero}</li>
            <li>{booleano ? "Verdadero" : "Falso"}</li>
            <li>{arreglo.join(", ")}</li>
            <li>{`${objeto.nombre} ${objeto.edad}`}</li>
            <li>{elementoReact}</li>
            <li>{arreglo.map(funciones).join(", ")}</li>
            <li>{componenteReact}</li>
        </ul>
        </>
    ) 
}
