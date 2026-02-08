// "use client";

// import { useState } from "react";
// import ProductCard from "./ProductCard";
// import AlphabetFilter from "./AlphabetFilter";
// import ProductSearch from "./ProductSearch";
// import { products } from "@/data/products";

// export default function ProductsPageSection() {
//   const [search, setSearch] = useState("");
//   const [activeLetter, setActiveLetter] = useState("A");

//   const filteredProducts = products.filter(
//     (p) =>
//       p.name.toLowerCase().startsWith(activeLetter.toLowerCase()) &&
//       (p.name.toLowerCase().includes(search.toLowerCase()) ||
//         p.generic.toLowerCase().includes(search.toLowerCase())),
//   );

//   return (
//     <section className="bg-slate-50 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-semibold text-center mb-8">Products</h2>

//         <ProductSearch value={search} onChange={setSearch} />
//         <AlphabetFilter active={activeLetter} setActive={setActiveLetter} />

//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.slug} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import AlphabetFilter from "./AlphabetFilter";
// import ProductSearch from "./ProductSearch";
// import { supabase } from "@/lib/supabase";

// export default function ProductsPageSection() {
//   const [search, setSearch] = useState("");
//   const [activeLetter, setActiveLetter] = useState("A");
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadProducts = async () => {
//       const { data, error } = await supabase
//         .from("products")
//         .select("*")
//         .order("name", { ascending: true });

//       if (!error) setProducts(data);
//       setLoading(false);
//     };

//     loadProducts();
//   }, []);

//   const filteredProducts = products.filter(
//     (p) =>
//       p.name?.toLowerCase().startsWith(activeLetter.toLowerCase()) &&
//       (p.name?.toLowerCase().includes(search.toLowerCase()) ||
//         p.generic?.toLowerCase().includes(search.toLowerCase())),
//   );

//   if (loading) return <div className="text-center py-20">Loading...</div>;

//   return (
//     <section className="bg-slate-50 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl font-semibold text-center mb-8">Products</h2>

//         <ProductSearch value={search} onChange={setSearch} />
//         <AlphabetFilter active={activeLetter} setActive={setActiveLetter} />

//         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import AlphabetFilter from "./AlphabetFilter";
import ProductSearch from "./ProductSearch";
import { supabase } from "@/lib/supabase";
import CategoryDropdown from "./CategoryDropdown";
import Pagination from "./Pagination";
import Link from "next/link";

const PER_PAGE = 12;

export default function ProductsPageSection() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState("");
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // load products
  useEffect(() => {
    const loadProducts = async () => {
      const { data } = await supabase
        .from("products")
        .select("*")
        .order("name");

      setProducts(data || []);
      setLoading(false);
    };

    loadProducts();
  }, []);

  // unique categories
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category).filter(Boolean))];
  }, [products]);

  // filtering
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchLetter = activeLetter
        ? p.name?.toLowerCase().startsWith(activeLetter.toLowerCase())
        : true;

      const matchSearch =
        p.name?.toLowerCase().includes(search.toLowerCase()) ||
        p.generic?.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category ? p.category === category : true;

      return matchLetter && matchSearch && matchCategory;
    });
  }, [products, search, activeLetter, category]);

  // pagination
  const totalPages = Math.ceil(filteredProducts.length / PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE,
  );

  // reset page on filter change
  useEffect(() => {
    setPage(1);
  }, [search, activeLetter, category]);

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <ProductSearch value={search} onChange={setSearch} />

        {/* Category Dropdown */}
        {/* <div className="text-center mb-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded"
          >
            <option value="">All Category</option>
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div> */}
        <CategoryDropdown
          value={category}
          onChange={setCategory}
          options={categories}
        />

        <AlphabetFilter active={activeLetter} setActive={setActiveLetter} />

        {/* Products */}
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-500">
            No Products Found
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {paginatedProducts.map((product) => (
              <Link href={`/product/${product.slug}`}>
                <ProductCard key={product.id} product={product} />
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {/* <div className="flex justify-center gap-2 mt-10 flex-wrap">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 border rounded ${
                page === i + 1 ? "bg-secondary text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div> */}

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </section>
  );
}
