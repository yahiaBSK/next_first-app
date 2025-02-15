"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function ProductCard({ id }) {
  return (
    <div
      // key={keyy}
      className="mainCardDiv border border-white/25 rounded-sm p-4 text-start w-fit flex flex-col gap-6"
    >
      <div className="imgDiv rounded-sm overflow-hidden w-[180px] h-[180px]">
        <Image
          className="light:invert hover:scale-125 duration-250 transition-all cursor-pointer "
          src="/test-img.jpg"
          alt="Next.js logo"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="infoDiv flex flex-col gap-2">
        <p>Shaving machine v1</p>
        <div className="inline-flex flex-row justify-between items-center text-white/50">
          <p>220DA</p>
          <p>25 left</p>
        </div>

        <div className="btnDiv flex flex-row gap-2 w-full justify-between ">
          <Link href={`products/${id}`} className="w-full">
            <Button className="w-full" size={"sm"}>
              Buy Now!
            </Button>
          </Link>
          <Button size={"sm"} variant={"outline"} className="w-[35%]">
            Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
