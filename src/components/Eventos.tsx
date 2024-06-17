import { Component, ReactNode } from "react";

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }
  sumar() {
    
  }
  render(): ReactNode {
    return (
      <>
        <div>
          <h2>Eventos de Componentes de Clases</h2>
          <nav>
            <button>+</button>
            <button>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
        </div>
      </>
    );
  }
}
