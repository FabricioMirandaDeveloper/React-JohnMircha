import { Component } from "react";

function Login() {
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}
function Logout() {
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)
        this.state = {
            session: false
        }
    }
    render() {
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login/> : <Logout/>}
            </div>
        )
    }
}