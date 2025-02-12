"use client";

import { useState } from "react";
import { usePokemon } from "@/hooks/usePokemon.js";
import { SearchForm } from "@/components/SearchForm/index.jsx";
import { PokemonList } from "@/components/PokemonList/index.jsx";
import { Loader } from "@/components/Loader/index.jsx";

export default function Home() {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { Pokemon, loading } = usePokemon(type, searchTerm);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">List of card</h1>

      <SearchForm onSearch={setSearchTerm} onTypeChange={setType} />

      {loading ? <Loader /> : <PokemonList pokemon={Pokemon} />}
    </div>
  );
}
