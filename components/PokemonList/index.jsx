"use client";

import Link from "next/link";

export const PokemonList = ({ pokemon }) => {
  return (
    <section className="w-fit mx-auto justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemon.map((p) => (
          <Link key={p.name} href={`/pokemon/${p.name}`}>
            <div className="text-center bg-white card rounded-xl duration-500 hover:scale-105 overflow-hidden">
              <img
                src={p.image}
                alt={p.name}
                className="h-80 w-full object-contain rounded-t-xl hover:animate-zoomPulse"
              />
              <div className="bg-gray-200 px-4 py-3">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {p.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
