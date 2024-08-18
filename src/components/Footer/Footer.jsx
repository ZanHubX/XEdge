import React from "react";
import {
  FaLinkedin,
  FaBehance,
  FaInstagram,
  FaPhone,
  FaGithub,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-darkGray/90 pt-12 pb-8 text-white w-full ">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-between  ml-4">
          {/* company details section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">
              <span className="text-primary">X</span>Edge
            </h1>
            <p className="text-sm max-w-[300px]">
              XEdge specializes in reselling premium, limited-edition sneakers
              from top brands like Nike, Adidas, and Yeezy. With a focus on
              authenticity and quality, XEdge offers a seamless shopping
              experience for sneaker enthusiasts.
            </p>
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +66 95-108-7836
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaMapLocation />
                Bangkok, Thailand
              </p>
            </div>
          </div>
          {/* social details section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/kaung-zan-thaw-056b4a256/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a
                href="https://www.instagram.com/hosh1d_echo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a
                href="https://github.com/hosh1dEcho"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-3xl hover:scale-105 duration-300" />
              </a>
              <a
                href="https://www.behance.net/kaungthaw6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBehance className="text-3xl hover:scale-105 duration-300" />
              </a>
            </div>
            <div>
              <h1 className="text-xl mb-2 font-semibold">Payment Methods</h1>
              <img src={CreditCards} alt="Credits Card" className="w-[80%]" />
            </div>
          </div>
        </div>
        {/* copyright */}
        <p className="text-white text-center mt-8 pt-8 border-t-2 mb-2">
          Copyright &copy; 2024 XEdge. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
