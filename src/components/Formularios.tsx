import { useState } from "react";

/* export default function Formularios() {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()
        alert("El formulario se ha enviado")
    }
    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">
                    {" "}
                    Nombre:
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </label>
                <h2>Elije tu Sabor Js Favorito</h2>
                <input
                    type="radio"
                    name="sabor"
                    id="vanilla"
                    value="vanilla"
                    onChange={(e) => setSabor(e.target.value)}
                    defaultChecked
                />
                <label htmlFor="vanilla">Javascript</label>
                <input
                    type="radio"
                    name="sabor"
                    id="react"
                    value="react"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="react">React</label>
                <input
                    type="radio"
                    name="sabor"
                    id="vue"
                    value="vue"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="vue">Vue</label>
                <input
                    type="radio"
                    name="sabor"
                    id="angular"
                    value="angular"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="angular">Angular</label>
                <input
                    type="radio"
                    name="sabor"
                    id="svelte"
                    value="svelte"
                    onChange={(e) => setSabor(e.target.value)}
                />
                <label htmlFor="svelte">Svelte</label>
                <p>Selecciona tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Terminos y Condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={e=>setTerminos(e.target.checked)}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
} */

export default function Formularios() {
    const [form, setForm] = useState({
        nombre: " "
    });
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">
                    {" "}
                    Nombre:
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                </label>
                <h2>Elije tu Sabor Js Favorito</h2>
                <input
                    type="radio"
                    name="sabor"
                    id="vanilla"
                    value="vanilla"
                    onChange={handleChange}
                    defaultChecked
                />
                <label htmlFor="vanilla">Javascript</label>
                <input
                    type="radio"
                    name="sabor"
                    id="react"
                    value="react"
                    onChange={handleChange}
                />
                <label htmlFor="react">React</label>
                <input
                    type="radio"
                    name="sabor"
                    id="vue"
                    value="vue"
                    onChange={handleChange}
                />
                <label htmlFor="vue">Vue</label>
                <input
                    type="radio"
                    name="sabor"
                    id="angular"
                    value="angular"
                    onChange={handleChange}
                />
                <label htmlFor="angular">Angular</label>
                <input
                    type="radio"
                    name="sabor"
                    id="svelte"
                    value="svelte"
                    onChange={handleChange}
                />
                <label htmlFor="svelte">Svelte</label>
                <p>Selecciona tu lenguaje de programacion favorito</p>
                <select name="lenguaje" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="ruby">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Terminos y Condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    );
}
