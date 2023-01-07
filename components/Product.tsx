"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { fadeUp } from "../utils/motion";

interface IProps {
  product: Product;
  idx: number;
}

const Product = ({ product, idx }: IProps) => {
  const router = useRouter();
  return (
    <motion.div
      initial="hidden"
      variants={fadeUp(idx * 0.1)}
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      onClick={() => router.push(`/product/${product.id}`)}
      className="flex flex-col max-w-[196px] bg-white shadow-md cursor-pointer md:max-w-[220px]"
    >
      <div className="relative w-full h-[260px]">
        <Image
          src={product.image}
          alt="product"
          fill={true}
          className="w-[182px] h-[182px] object-contain p-3 md:w-[220px] md:h-[220px]"
        />
      </div>

      <div className="py-5 flex flex-col space-y-3">
        <div className="bg-primary px-3 py-2 self-start rounded-tr-full rounded-br-full">
          <p className="text-white font-bold text-xs md:text-sm">
            {product.rating.count} stocks left
          </p>
        </div>

        <p className="text-[#1A1A1A] line-clamp-3 text-sm md:text-base px-3 min-h-[60px] md:min-h-[72px]">
          {product.title}
        </p>

        <div className="flex items-center justify-between space-x-5 px-3">
          <p className="font-bold text-base md:text-lg">${product.price}</p>

          <div className="flex items-center space-x-1">
            <p className="text-[9px] md:text-[11px] text-[#333333]">
              {product.rating.rate}
            </p>

            <img
              src="/star.png"
              alt="star"
              className="w-[9px] h-[9px] object-contain md:w-[11px] md:h-[11px]"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
