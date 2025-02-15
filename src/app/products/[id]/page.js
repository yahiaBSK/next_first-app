// import { AutoComplete, Button, Input, Select } from "antd";
"use client";

import { useParams } from "next/navigation";

export default function Product({ params }) {
  const { id } = useParams();
  const name = `Shaving machine v${id}`;
  const productInfo = [
    { item: "Product name", value: name },
    { item: "Price", value: id + 20 },
    { item: "Left", value: id - 2 },
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
        
        {productInfo.map((info) => (
          <p>
            <span key={info.item} className="text-blue-500 font-black border-l-4 border-blue-500 pl-2">
              {info.item} :{" "}
            </span>
            {info.value}
          </p>
        ))}
      </div>
    </div>
  );
}
