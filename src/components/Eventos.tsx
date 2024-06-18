import { Component, ReactNode } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  sumar() {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar() {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render(): ReactNode {
    return (
      <>
        <div>
          <h2>Eventos de Componentes de Clases</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
        </div>
      </>
    );
  }
}
export class EventosES7 extends Component {
  state = {
      contador: 0,
    };

  sumar = () => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar = () => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render(): ReactNode {
    return (
      <>
        <div>
          <h2>Eventos de Componentes de Clases ES7</h2>
          <nav>
            <button onClick={this.sumar}>+</button>
            <button onClick={this.restar}>-</button>
          </nav>
          <h3>{this.state.contador}</h3>
        </div>
      </>
    );
  }
}