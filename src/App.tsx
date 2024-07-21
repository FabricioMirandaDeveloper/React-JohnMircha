import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './components/component'
import Propiedades from './components/propiedades'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import Padre from './components/ComunicacionComponentes'
import CicloVida from './components/CicloDeVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHocks from './components/ScrollHocks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <AjaxApis/>
        <hr />
        <Component msg="Hola soy un componente funcional expresado desde una prop"/>
        <hr />
        <Propiedades 
        cadena="Soy un texto" 
        numero={23} 
        booleano={false} 
        arreglo={[1,2,3]} 
        objeto={{nombre: "Fabricio", edad: 23}}
        elementoReact={<i>Soy un elemento de react</i>}
        funciones={(num) => num * num}
        componenteReact={<Component msg="Soy un componente que entra por una prop"/>}
        />
        {/* <Estado/> */}
        <RenderizadoCondicional/>
        <RenderizadoElementos/>
        <EventosES6/>
        <hr />
        <EventosES7/>
        <hr />
        <MasSobreEventos/>
        <hr />
        <Padre/>
        <hr />
        <CicloVida/>
        <hr />
        <ContadorHooks/>
        <hr />
        <ScrollHocks/>
        <hr />
        <RelojHooks/>
        <hr />
        <AjaxHooks/>
        <hr />
        <HooksPersonalizados/>
        <hr />
        <Referencias/>
        <hr />
        <Formularios/>
      </section>
    </>
  )
}

export default App
