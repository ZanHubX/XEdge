import React from "react";
import BgImage from "../../assets/bg-slate.png";
import LnF from "../../assets/L&F.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false);

  return (
    <main className="bg-darkGray/95 md:min-h-[450px] md:w-full relative">
      <section className="min-h-[650px] w-full  ">
        <div className="container">
          {/* Navbar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[695px]">
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
                className="text-6xl font-bold leading-tight ml-17"
              >
                Lost & Found
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
                  <h1 className="text-2xl">Jodan 1 Retro High OG</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    The “Lost & Found” features a faux crumbled black leather
                    collar that nods to the fact that the OG Jordan 1's collar
                    has a tendency to crumble with age. Faux cracking is also
                    present on the toe, mid-panel, and collar.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[195px] bg-gray-700/50"></div>
              </motion.div>
            </div>
            {/* Hero Image Section */}
            <div className="realtive">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1.1 }}
                transition={{
                  type: "spring",
                  stiffness: 90,
                  damping: 30,
                  duration: 2,
                }}
                src={LnF}
                className="relative z-50 h-[900px] w-[900px] md:h-[600px] md:w-[700px] img-shadow mr-80 items-center justify-center hidden md:block"
              />
              {/* orange circle ring */}
              {/* <div
                className="h-[180px] w-[180px] absolute top-24 right-80 border-primary 
              border-[20px] rounded-full z-10"
              ></div> */}
              {/* big text section */}
              <div className="absolute top-20 left-[950px] z-[100] ">
                <motion.h1
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 1,
                  }}
                  className="text-[150px] scale-150 font-bold text-darkGray/80 leading-none  hidden md:block"
                >
                  NIKE
                </motion.h1>
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
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28 opacity-0"
            >
              <h1 className=" opacity-0 text-7xl font-bold leading-tight ml-17">
                Black Coffee
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl opacity-0">Black Coffee</h1>
                  <h1 className="text-sm  leading-loose opacity-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Soluta officiis dignissimos aut. Necessitatibus magni minus
                    enim esse qui, nostrum neque!
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[195px] bg-gray/40 opacity-40"></div>
              </div>
            </motion.div>
            <div></div>
          </div>
        </div>

        {/* sidebar section */}
        {sidebar && (
          <motion.div
            initial={{ x: "40%" }}
            animate={{ x: 0 }}
            className="absolute top-0 right-0 w-[140px] h-full bg-primary/50 backdrop-blur-sm z-10 rounded-l-3xl"
          >
            <div className="w-full h-full flex justify-center items-center ">
              <div className="flex flex-col justify-center items-center gap-6">
                {/* line */}
                <div className="w-[1px] h-[70px] bg-white/50"></div>
                {/* social icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl text-black" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl text-black" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl text-black" />
                </div>

                <div className="w-[1px] h-[70px] bg-white/20"></div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default Hero;
