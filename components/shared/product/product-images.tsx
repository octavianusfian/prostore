"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        className="min-h-[300px] object-cover object-center"
        width={1000}
        height={1000}
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "border mr-2 cursor-pointer hover:!border-orange-600",
              current === index && "!border-orange-500"
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
