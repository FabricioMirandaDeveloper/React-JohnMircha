import { Component, ReactNode } from "react";

export default class Padre extends Component {
    state = {
        contador: 0
    }

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1
        }
        )
    }
    render(): ReactNode {
        return(
            <>
            <h2>Comunicacion entre Componenetes</h2>
            <p>{this.state.contador}</p>
            <Hijo incrementarContador={this.incrementarContador} msj="Mensaje para el hijo 1"/>
            <Hijo incrementarContador={this.incrementarContador} msj="Mensaje para el hijo 2"/>
            </>
        )
    }
}

function Hijo(prop) {
    return(
        <>
        <h3>{prop.msj}</h3>
        <button onClick={prop.incrementarContador}>+</button>
        </>
    )
}