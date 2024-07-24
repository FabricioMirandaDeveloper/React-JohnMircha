import "./Estilos.css"
import style from "./Estilos.module.css"
export default function Estilos() {
    const miEstilo = {
        background: "yellow"
    }
    return(
        <>
            <section className="estilos">
                <h2>Estilos CSS con React</h2>
                <h3 className="bg-react">Estilos en hoja CSS externa</h3>
                <h3 className="bg-react" style={{background: "red", color: "white"}}>Estilos en linea {"atributo style"}</h3>
                <h3 className="bg-react" style={miEstilo}>Estilos en linea {"atributo style"}</h3>
                <button className={style.success}>Opcion 1</button>
                <button className={style.error}>Opcion 2</button>
            </section>
        </>
    )
}