import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

export default function Home() {
  return (
    <div className="bg-primary-black text-white w-full 2xl:max-w-7xl px-12    ">
      {/* navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={` py-8 relative`}
      >
        <div className="absolute w-[50%]  inset-0 gradient-01" />
        <div className={`w-full mx-auto flex justify-between gap-8`}>
          <img
            src="/search.svg"
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />
          <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
            METAVERSUS
          </h2>
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      </motion.nav>
    
    </div>
  );
}
