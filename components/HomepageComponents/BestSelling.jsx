import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Watch1 from "@/public/best1.png";
import Watch2 from "@/public/best2.png";
import Watch3 from "@/public/best3.png";
import Watch4 from "@/public/best4.png";
import Watch5 from "@/public/best5.png";
import Watch6 from "@/public/best6.png";
import Watch7 from "@/public/best7.png";
import Watch8 from "@/public/best8.png";
import Watch9 from "@/public/best9.png";
import Watch10 from "@/public/best10.png";
import Watch11 from "@/public/best11.png";
import Watch12 from "@/public/best12.png";
import Link from "next/link";

const BestSellingWatches = () => {
  const [watches, setWatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchedWatches = [
      {
        id: 1,
        name: "Apple Watch Series 10",
        price: 399,
        rating: 4.8,
        image: Watch1,
        link: "/products/brand/iwatch",
      },
      {
        id: 2,
        name: "Apple Watch Series 10",
        price: 399,
        rating: 4.9,
        image: Watch2,
        link: "/products/brand/iwatch",
      },
      {
        id: 3,
        name: "Apple Watch Series 10",
        price: 749,
        rating: 4.9,
        image: Watch3,
        link: "/products/brand/iwatch",
      },
      {
        id: 4,
        name: "Apple Watch Ultra",
        price: 899,
        rating: 4.6,
        image: Watch4,
        link: "/products/brand/iwatch",
      },
      {
        id: 5,
        name: "Apple Watch Series 10",
        price: 429,
        rating: 5.0,
        image: Watch5,
        link: "/products/brand/iwatch",
      },
      {
        id: 6,
        name: "Apple Watch SE",
        price: 279,
        rating: 4.7,
        image: Watch6,
        link: "/products/brand/iwatch",
      },
      {
        id: 7,
        name: "Apple Watch Ultra 2",
        price: 799,
        rating: 4.4,
        image: Watch7,
        link: "/products/brand/iwatch",
      },
      {
        id: 8,
        name: "Apple Watch Series 9",
        price: 699,
        rating: 4.8,
        image: Watch8,
        link: "/products/brand/iwatch",
      },
      {
        id: 9,
        name: "Apple Watch Series 9",
        price: 529,
        rating: 4.7,
        image: Watch9,
        link: "/products/brand/iwatch",
      },
      {
        id: 10,
        name: "RingConn",
        price: 299,
        rating: 4.7,
        image: Watch10,
        link: "/products/brand/iwatch",
      },
      {
        id: 11,
        name: "Galaxy Watch7",
        price: 379,
        rating: 4.7,
        image: Watch11,
        link: "/products/brand/galaxy",
      },
      {
        id: 12,
        name: "Google Pixel Watch 3",
        price: 399,
        rating: 4.7,
        image: Watch12,
        link: "/products/brand/google",
      },
    ].filter((watch) => watch && watch.image); // Ensure all watches have valid images
    setWatches(fetchedWatches);
  }, []);

  const nextWatch = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % watches.length);
  const prevWatch = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + watches.length) % watches.length
    );
  const getWatchIndex = (offset) =>
    (currentIndex + offset + watches.length) % watches.length;

  if (watches.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12">
          Best-selling Watches
        </h2>
        <div className="relative">
          <button
            onClick={prevWatch}
            className="absolute left-4 p-1 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="flex items-center sm:h-[27rem] h-[35rem] justify-center overflow-hidden">
            {Array.from({ length: 5 }).map((_, offset) => {
              const watch = watches[getWatchIndex(offset)];
              if (!watch) return null; // Skip rendering if watch is undefined
              return (
                <div
                  key={watch.id}
                  className={`transition-all duration-300 flex-shrink-0 w-full md:w-1/3 lg:w-1/5 px-2 ${
                    offset === 2 ? "scale-105 z-10" : "scale-95 opacity-75"
                  }`}
                >
                  <Link
                    href={watch.link}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      width={500}
                      height={500}
                      src={watch.image}
                      alt={watch.name}
                      className="w-full sm:h-48 md:h-56 lg:h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 truncate">
                        {watch.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">From ${watch.price}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm md:text-base">
                            {watch.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <button
            onClick={nextWatch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/50 rounded-full p-1 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingWatches;
