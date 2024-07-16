import { useEffect, useRef } from "react"

export default function Referencias() {
  /* const $refMenu = createRef() */
  const refMenu = useRef(null),
  refMenuBtn = useRef(null)
  useEffect(() => {
    console.log(refMenu, refMenuBtn);
    // Aquí puedes realizar cualquier operación que necesite acceder a las referencias
  }, []);
  const handleToggleMenu = (e) => {
    /* const $menu = document.getElementById("menu")
    if(e.target.textContent == "Menu") {
      e.target.textContent = "Cerrar"
      $menu.style.display = "block"
      
    }else {
      e.target.textContent = "Menu"
      $menu.style.display = "none"
    } */
      if(refMenuBtn.current.textContent == "Menu") {
        refMenuBtn.current.textContent = "Cerrar"
        refMenu.current.style.display = "block"
        
      }else {
        refMenuBtn.current.textContent = "Menu"
        refMenu.current.style.display = "none"
      } 
  }
  return (
    <>
      <h2>Referencias</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
      <nav id="menu" ref={refMenu} style={{display: "none"}}>
        <a href="">Seccion 1</a>
        <br />
        <a href="">Seccion 2</a>
        <br />
        <a href="">Seccion 3</a>
        <br />
        <a href="">Seccion 4</a>
        <br />
        <a href="">Seccion 5</a>
        <br />
        <a href="">Seccion 6</a>
      </nav>
    </>
  );
}
