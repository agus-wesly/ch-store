"use client";

import AddBtn from "./AddBtn";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpNoDelay, fadeUp } from "../../../utils/motion";

interface IProps {
  product: Product;
}

function ProductDetail({ product }: IProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={staggerContainer}
      className="m-5 mt-0 bg-white md:bg-transparent md:border-none border-2 shadow-lg border-[#623CEA] md:shadow-none border-opacity-40 flex flex-col items-start p-5 md:px-0 md:flex-row"
    >
      <motion.div
        variants={fadeUpNoDelay}
        viewport={{ once: true }}
        className="relative mx-auto w-[221px] h-[269px] md:flex-1"
      >
        <Image
          src={product.image}
          alt="product-img"
          fill={true}
          className="object-contain w-full h-full md:mix-blend-darken"
        />
      </motion.div>
      <hr className="bg-slate-400/80 w-full h-[2px] my-5 md:hidden" />

      <motion.div
        variants={fadeUpNoDelay}
        className="space-y-3 my-5 md:px-10 md:max-w-[500px] md:mx-auto flex-1"
      >
        <div className="flex items-center justify-between gap-3">
          <motion.p
            variants={fadeUp(0.2)}
            className="font-bold text-base text-gray-900/90"
          >
            {product.title}
          </motion.p>
          <motion.p
            variants={fadeUp(0.25)}
            className="font-bold text-primary/90 text-xs capitalize md:hidden"
          >
            {product.category}
          </motion.p>
        </div>
        <motion.h3 variants={fadeUp(0.3)} className="text-2xl font-extrabold ">
          ${product.price}
        </motion.h3>

        <motion.p
          variants={fadeUp(0.35)}
          className="text-xs font-bold text-gray-500"
        >
          {product.rating.count} stocks left
        </motion.p>

        <motion.h5
          variants={fadeUp(0.4)}
          className="hidden md:flex font-semibold text-lg text-gray-900"
        >
          Description
        </motion.h5>
        <motion.p
          variants={fadeUp(0.45)}
          className="hidden md:flex text-gray-700 text-base"
        >
          {product.description}
        </motion.p>
      </motion.div>

      <div className="my-3 space-y-2 md:hidden">
        <h5 className="font-semibold text-lg text-gray-900">Description</h5>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>

      <motion.div
        variants={fadeUpNoDelay}
        className="hidden md:flex flex-col my-5 space-y-5 px-5 md:px-10 flex-[0.75]"
      >
        <AddBtn product={product} />
        <button className="text-center py-3 border-2 border-primary bg-opacity-90 font-bold text-primary text-lg cursor-pointer bg-white rounded">
          Share
        </button>
      </motion.div>
    </motion.div>
  );
}

export default ProductDetail;
