"use client";
import { usePokemonTypes } from "../../hooks/usePokemonTypes";

export const SearchForm = ({ onSearch, onTypeChange }) => {
  const types = usePokemonTypes();

  return (
    <form className="grid gap-6 gap-3 mb-4 md:grid-cols-3">
      <div className="">
        <label
          htmlFor="Pokémon Type"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Select Pokémon Type
        </label>

        <select
          onChange={(e) => onTypeChange(e.target.value)}
          className="bg-gray-50 border border-gray-300 to-pink-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Pokémon name
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          style={{ lineHeight: 1.2 }}
          placeholder="Search Pokémon..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div />
    </form>
  );
};
