import { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web} target="_blank">{props.el.name}</a>
    </li>
  );
}
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Verano", "Invierno", "Primavera", "Otoño"],
    };
  }
  render() {
    /* console.log(data); */

    return (
      <>
        <h2>Renderizado de elementos</h2>
        <ol>
          {this.state.seasons.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ol>
        <h3>Framework Frotend JavaScript</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el}/>
          ))}
        </ul>
      </>
    );
  }
}
