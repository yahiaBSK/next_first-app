// "use client";
import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";

// "use client";
export default function Product() {
  const products = [];
  const renderProducts = () => {
    for (let i = 0; i < 6; i++) {
      products.push(<ProductCard key={i} id={i + 1} />);
    }
  };
  renderProducts();
  return (
    <div className="mainDiv">
      <div>
        <h1 className="text-3xl p-4 rounded-sm w-fit m-auto font-black mb-4">
          Products Lists
          
          <Button variant={"outline"}>Buy Now!</Button>
          <Button variant="outline">Outline Button</Button>
          
        </h1>
        <div className="productsDiv flex flex-row gap-4 flex-wrap items-center justify-evenly">
          {products}
        </div>
      </div>
    </div>
  );
}
