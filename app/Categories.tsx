"use client";

import { Categories as allCategories } from "../constant";
import { motion } from "framer-motion";
import { staggerContainer, slideRight } from "../utils/motion";
import { useRouter } from "next/navigation";

function Categories() {
  const router = useRouter();
  return (
    <div className="max-w-6xl mx-auto py-5 px-5 lg:px-10 space-y-5">
      <h1 className="text-xl text-black/95 font-bold">
        Explore <span className="text-primary font-extrabold">popular</span>{" "}
        Categories
      </h1>

      <motion.div
        variants={staggerContainer}
        whileInView="show"
        className="grid grid-cols-2 gap-5 lg:flex lg:space-x-3 lg:h-[342px]"
      >
        {allCategories.map((categ, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            variants={slideRight(i * 0.08)}
            onClick={() => router.push(`categories/${categ.title}`)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
            className={`relative cursor-pointer rounded-lg py-5 flex max-h-[120px] items-center bg-[#82846D] max-w-[185px] lg:max-w-none lg:bg-transparent lg:max-h-max lg:h-full ${
              i === 2 ? "lg:flex-[2]" : "lg:flex-1"
            }`}
          >
            <img
              src={categ.img}
              alt="categ-img"
              className="object-cover absolute right-0 top-0 h-full w-[30%] lg:w-full rounded-tr-lg rounded-br-lg lg:rounded-lg"
            />

            <div className="w-[70%] flex flex-col space-y-3 px-3 lg:w-full lg:text-center lg:rounded-bl-lg lg:rounded-br-lg lg:bg-black/50 lg:backdrop-blur-xl lg:absolute lg:bottom-0 lg:left-0">
              <h3 className="text-white capitalize font-bold text-sm lg:text-lg">
                {categ.title}
              </h3>
              <p className="text-xs text-neutral-50 line-clamp-3 lg:hidden">
                {categ.subTitel}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Categories;
