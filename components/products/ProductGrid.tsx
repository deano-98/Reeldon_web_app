import { products } from "@/lib/constants";
import { ProductCard } from "./ProductCard";
export function ProductGrid({
  category,
}: {
  category?: "structural" | "aesthetic" | "doors";
}) {
  const list = products.filter((p) =>
    category === "structural"
      ? p.category === "Structural"
      : category === "aesthetic"
        ? p.category === "Aesthetic"
        : category === "doors"
          ? p.category === "Doors"
          : true,
  );
  return (
    <div className="mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
      {list.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
