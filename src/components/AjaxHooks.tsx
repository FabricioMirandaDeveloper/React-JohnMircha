import { useEffect, useState } from "react";

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}
export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);
  /*   useEffect(() => {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          json.results.forEach((el) => {
            fetch(el.url)
              .then((res) => res.json())
              .then((json) => {
                const pokemon = {
                  id: json.id,
                  name: json.name,
                  avatar: json.sprites.front_default,
                };
                setPokemons((pokemons) => [...pokemons, pokemon])
              });
          });
        });
    }, []); */
  useEffect(() => {
    const getPokemons = async (url) => {
      const res = await fetch(url),
        json = await res.json()
      /* console.log(json); */
      
      json.results.forEach(async (el) => {
        const res = await fetch(el.url),
          json = await res.json()
          /* console.log(json); */
          
          
        const pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };
        setPokemons((pokemons) => [...pokemons, pokemon])
      });
    }
    getPokemons("https://pokeapi.co/api/v2/pokemon/")
  },[]);


  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h2>Cargando...</h2>
      ) : (
        pokemons.map((el, index) => (
          <Pokemon key={index} name={el.name} avatar={el.avatar} />
        ))
      )}
    </>
  );
}
