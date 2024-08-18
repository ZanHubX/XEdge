import React from "react";
import { motion } from "framer-motion";
import Nike1 from "../../assets/coffee/nike1.png";
import Nike2 from "../../assets/coffee/nike2.png";
import Nike3 from "../../assets/coffee/nike3.png";

const servicesData = [
  {
    id: 1,
    image: Nike1,
    title: "Power Puff Buttercup ",
    description:
      "A bold green and black sneaker inspired by Buttercup's fearless spirit. Perfect for those who love to stand out.",
  },
  {
    id: 2,
    image: Nike2,
    title: "Power Puff Bubbles",
    description:
      "A vibrant blue and yellow shoe capturing Bubbles' playful energy. Ideal for spreading positivity.",
  },
  {
    id: 3,
    image: Nike3,
    title: "Power Puff Blossom",
    description:
      "A striking pink and orange sneaker reflecting Blossom's leadership and confidence. Designed for those who command attention.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};
const Services = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center w-3/4 mx-auto space-y-2 ">
        <motion.h1
          whileInView={"visible"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 2.5,
          }}
          className="uppercase text-center text-3xl font-bold"
        >
          Trend & <span className="text-primary">Unique</span>
        </motion.h1>
        <motion.p
        variants={cardVariants}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 2.5,
          }}
          className="font-bold text-sm"
        >
          Offering personalized fashion recommendations, premium customer
          support, fast shipping, and easy returns. Our services are designed to
          provide a seamless shopping experience with the latest trends and
          guaranteed satisfaction.
        </motion.p>
      </div>
      {/* card section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 40,
          delay: 1,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 "
      >
        {servicesData.map((service, index) => (
          <motion.div
            variants={cardVariants}
            key={index}
            className="text-center p-4"
          >
            <img
              className=" w-[250px] h-[250px] ml-24 border-2 mt-8 border-primary rounded-2xl"
              src={service.image}
              alt={service.altText || "Service image"}
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary mt-5">
                {service.title}
              </h1>

              <p className="text-darkGray text-sm font-serif font-light">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
