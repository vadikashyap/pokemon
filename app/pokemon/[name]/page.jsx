import Link from "next/link";

export default async function PokemonDetails({ params }) {
  const { name } = await params;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await response.json();

  return (
    <section className="container mx-auto">
      <div className="mb-4 mt-5">
        <Link href="/" className="text-blue-500 hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="font-bold">{pokemon.name}</span>
      </div>
      <div className="max-w-[600px] mx-auto p-4">
        <div className="shadow-xl rounded-xl border">
          <div className="p-4 border-b-2">
            <h1 className="text-3xl font-bold">{pokemon.name}</h1>
          </div>
          <div className="grid align-middle grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="flex flex-col align-middle justify-center">
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-full h-auto animate-zoomPulse"
              />
            </div>
            <div className="flex flex-col align-middle justify-center">
              <h2 className="text-xl font-bold mb-2">Details</h2>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
            </div>
            <div className="flex flex-col align-middle justify-center">
              <h3 className="text-lg font-bold">Abilities</h3>
              <ul>
                {pokemon.abilities.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
