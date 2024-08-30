import React from "react";
import BannerPng from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="bg-secondary/10">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div className="flex justify-center items-center">
          <motion.img
          initial={{ opacity:0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={BannerPng}
            alt=""
            className="w-[300px] md:max-w-[400px] h-full object-cover drop-shadow"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[400px]">
            <motion.h1
             variants={FadeUp(0.5)}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
            className="text-3xl lg:text-6xl font-bold uppercase">
              {" "}
              Brand Info
            </motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
              culpa molestiae quos consequuntur neque cumque architecto sit
              eligendi pariatur magnam molestias eveniet corrupti nihil, at
              saepe ratione laborum iusto rem.
            </motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              eligendi provident rem aspernatur tempora debitis.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#de0029]hover:!scale-110 duration-300 flex items-center gap-2">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
