import React from "react";
import BgImage from "../../assets/bg-slate.png";
import LnF from "../../assets/L&F.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar Section */}
          <Navbar />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text Content Section */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                className="text-7xl font-bold leading-tight ml-17"
              >
                Black Coffee
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Coffee</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta officiis dignissimos aut. Necessitatibus magni minus
                    enim esse qui, nostrum neque!
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[195px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image Section */}
            <div className="realtive">
              <img
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale:1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                }}
                src={LnF}
                className="relative z-50 h-[600px] w-[600px] md:h-[600px] img-shadow mr-80 items-center"
              />
              {/* orange circle ring */}
              {/* <div
                className="h-[180px] w-[180px] absolute top-24 right-80 border-primary 
              border-[20px] rounded-full z-10"
              ></div> */}
              {/* big text section */}
              <div className="absolute top-20 left-[300px] z-[100]">
                <h1 className="text-[100px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Coffee
                </h1>
              </div>
            </div>
            {/* third div Section */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-17">
                Black Coffee
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Coffee</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta officiis dignissimos aut. Necessitatibus magni minus
                    enim esse qui, nostrum neque!
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[195px] bg-darkGray/50"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
