import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
//import CreditCard from "../../assets/website/credit_cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-darkGray/90 pt-12 ph-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">
              <span className="text-primary">X</span>Edge
            </h1>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
              consectetur dolorem tempore.
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
