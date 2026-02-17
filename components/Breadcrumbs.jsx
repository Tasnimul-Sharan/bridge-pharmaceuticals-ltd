import Link from "next/link";

export default function Breadcrumbs({ product }) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <Link href="/">Home</Link> / <Link href="/products">Products</Link> /{" "}
      <span className="text-gray-800 font-medium">{product.name}</span>
    </nav>
  );
}
