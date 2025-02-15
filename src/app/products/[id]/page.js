"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Product({ params }) {
  const { id } = useParams();

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
  products && console.log(products);

  const name = `Shaving machine v${id}`;

  const p = products?.find((item) => item.id == id);
  console.log(p);

  const productInfo = p && [
    { item: "Product name", value: p.title },
    { item: "Price", value: p.price },
    { item: "Left", value: p.description },
  ];
  return (
    <div className="mainDiv">
      <div className="text-3xl rounded-sm w-fit m-auto font-black my-4">
        <h1>Product Info</h1>
      </div>

      <div className="product-info flex flex-col gap-3">
        <div className="border border-white/15 rounded-sm p-4 flex flex-row gap-2 max-w-[25%] mb-4">
          {/* <Input className="w-[100%]" placeholder="Type here..."/> */}
          {/* <Button type="default">Search</Button> */}koin
        </div>
        {loading && <p>Loading...</p>}
        {p &&
          productInfo.map((info) => (
            <p>
              <span
                key={info.item}
                className="text-blue-500 font-black border-l-4 border-blue-500 pl-2"
              >
                {info.item} :{" "}
              </span>
              {info.value}
            </p>
          ))}
      </div>
    </div>
  );
}
