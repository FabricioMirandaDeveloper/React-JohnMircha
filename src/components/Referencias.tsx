import { createRef, useRef } from "react"

export default function Referencias() {
    const refMenu = createRef(),
    refMenuBtn = useRef()
    const handleToggleMenu = (e) => {
        const $menu = document.getElementById("menu")
        if(e.target.textContent == "menú") {
            e.target.textContent = "cerrar"
            $menu.style.display = "block"
        }else {
            e.target.textContent = "menú"
            $menu.style.display = "none"
        }

        
    }
  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} id="menu-btn" onClick={handleToggleMenu}>menú</button>
      <nav id="menu" ref={refMenu}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
        <a href="#">Seccion 6</a>
        <br />
      </nav>
    </>
  );
}
