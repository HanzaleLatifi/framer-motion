import { motion } from "framer-motion";
import {
  navVariants,
  staggerContainer,
  slideIn,
  textVariant,
  textVariant2,
} from "../utils/motion";
import styles from "../styles";

export default function Home() {
  return (
    <div className="bg-primary-black text-white w-full 2xl:max-w-7xl px-12 overflow-hidden   ">
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

      {/* hero */}
      <section className="py-12">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`w-full mx-auto flex flex-col `}
        >
          <div className="flex justify-center items-center flex-col  z-10">
            <motion.h1
              variants={textVariant(1.1)}
              className="font-bold mb-4 md:text-[100px] sm:text-[60px] text-[44px]  md:leading-[90px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
            >
              Metaverse
            </motion.h1>
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row justify-center items-center"
            >
              <h1 className=" font-bold  md:text-[100px] sm:text-[60px] text-[44px]  md:leading-[90px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
                Ma
              </h1>
              <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
              <h1 className=" font-bold  md:text-[100px] sm:text-[60px] text-[44px]  md:leading-[90px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
                Ness
              </h1>
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("right", "tween", .2, 1)}
            className="relative w-full md:-mt-[20px] -mt-[12px] flex items-center justify-center"
          >
            <div className="absolute w-full lg:max-w-4xl h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

            <img
              src="/cover.png"
              alt="hero_cover"
              className="w-full lg:max-w-4xl sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
            />
          </motion.div>

        </motion.div>
      </section>
      
    </div>
  );
}
