import { useEffect, useState } from "react";

export function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);

  const BASE_LIMIT = 20;
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=${BASE_LIMIT}&offset=`;

  useEffect(() => {
    const fetchPokemon = async () => {
      const data: {
        count: number;
        next: string;
        previous: string;
        results: [];
      } = await (await fetch(BASE_URL + page * BASE_LIMIT)).json();
      setPokemons((latest) => [...latest, ...data.results]);
    };

    fetchPokemon();
  }, [page, BASE_LIMIT, BASE_URL]);

  return (
    <div className="App">
      {pokemons.map((pokemon: any, index: number) => {
        return <p key={index}>{pokemon.name}</p>;
      })}
      <button onClick={() => setPage((latest) => latest + 1)}>+</button>
    </div>
  );
}
