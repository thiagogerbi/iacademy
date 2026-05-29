"use client";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
