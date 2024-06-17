import { Component} from "react";

function ContadorHijo(prop) {
    return(
        <h3>{prop.contadorHijo}</h3>
    )
}

export default class Estado extends Component {
    constructor(props) {
      super(props) 
      this.state = {
        contador: 0
      } 

      setInterval(() => {
        this.setState({
            contador: this.state.contador + 1
        })
      }, 1000)
    }
    render() {
        return(
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <ContadorHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}