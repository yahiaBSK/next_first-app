"use client";
import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";

// "use client";
export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const renderProducts = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setProducts(data.data);
    setLoading(false);
  };
  useEffect(() => {
    renderProducts();
  }, []);
  // products && console.log(products);

  return (
    <div className="mainDiv">
      <div>
        <h1 className="text-3xl p-4 rounded-sm w-fit m-auto font-black mb-4">
          Products Lists
          <Button variant={"outline"}>Buy Now!</Button>
          <Button variant="outline">Outline Button</Button>
        </h1>
        <div className="productsDiv flex flex-row gap-4 flex-wrap items-center justify-evenly">
          {loading && <p>Loading...</p>}
          {products?.map((product) => (
            <ProductCard key={product.id} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
