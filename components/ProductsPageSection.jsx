"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import AlphabetFilter from "./AlphabetFilter";
import ProductSearch from "./ProductSearch";
import { products } from "@/data/products";

export default function ProductsPageSection() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("A");

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().startsWith(activeLetter.toLowerCase()) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.generic.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Products</h2>

        <ProductSearch value={search} onChange={setSearch} />
        <AlphabetFilter active={activeLetter} setActive={setActiveLetter} />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
