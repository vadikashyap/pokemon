import { useEffect, useState } from "react";

export const usePokemon = (type, searchTerm) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
      if (type) {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();
        const pokemonList = data.pokemon.map((entry) => entry.pokemon);

        // Fetch additional details for each Pokémon
        const pokemonWithDetails = await Promise.all(
          pokemonList.map(async (p) => {
            const detailsResponse = await fetch(p.url);
            const details = await detailsResponse.json();
            return {
              name: p.name,
              image: details.sprites.front_default,
              url: p.url,
            };
          })
        );
        setLoading(false);
        setPokemon(pokemonWithDetails);
      } else {
        const response = await fetch(url);
        const data = await response.json();

        // Fetch additional details for each Pokémon
        const pokemonWithDetails = await Promise.all(
          data.results.map(async (p) => {
            const detailsResponse = await fetch(p.url);
            const details = await detailsResponse.json();
            return {
              name: p.name,
              image: details.sprites.front_default,
              url: p.url,
            };
          })
        );
        setLoading(false);
        setPokemon(pokemonWithDetails);
      }
    };

    fetchPokemon();
  }, [type]);

  // Filter Pokémon based on the search term
  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { Pokemon: filteredPokemon, loading };
};
