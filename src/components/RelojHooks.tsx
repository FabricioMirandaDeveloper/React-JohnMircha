import { useEffect, useState } from "react"



export default function RelojHooks() {  
    const [visible, setVisible] = useState(false)  
    return(
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Hora/>}
                <button onClick={() => setVisible(true)}>Iniciar</button>
                <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}

function Hora() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        console.log("La hora cambio");    
    })
    useEffect(() => {
        const temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
        },1000)
        return () => {
            console.log("componente morido");
            clearInterval(temporizador)
        }
    },[])
    return(
        <h3>{hour}</h3>
    )
}