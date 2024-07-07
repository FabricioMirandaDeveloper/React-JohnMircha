import { useFetch } from "../hooks/useFetch";
export default function HooksPersonalizados() {
  let url = "https://pokeapi.co/api/v2/pokemons/";
  url = "https://jsonplaceholder.typicode.com/users"
  /* console.log(useFetch()); */
  const { data, isPending, error } = useFetch(url);
  return (
    <>
      <h2>Hooks Personalizado</h2>
      <h3>{JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{whiteSpace: "pre-wrap"}}>
          <data>{JSON.stringify(data)}</data>
        </pre>
      </h3>
    </>
  );
}
