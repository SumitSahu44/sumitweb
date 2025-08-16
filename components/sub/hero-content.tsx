"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10  sm:mt-10 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 mt-40 justify-center m-auto text-start">
        {/* Top Tag */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer</h1>
        </motion.div>

        {/* Name + Tagline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-10 sm:mt-4 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Sumit Sahu
            </span>
          </span>
          <span className="text-6xl">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              impactful
            </span>{" "}
            digital solutions.
          </span>
        </motion.div>

        {/* Short Intro */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a passionate Full Stack Developer specializing in building
          scalable web and mobile applications. Skilled in modern technologies
          and problem-solving, I focus on creating solutions that deliver real
          value.
        </motion.p>

        {/* Learn More Button */}
        <motion.button
          variants={slideInFromLeft(1)}
          onClick={() => setShowMore(!showMore)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          {showMore ? "Show Less" : "Learn More"}
        </motion.button>

        {/* Hidden Content */}
        {showMore && (
          <motion.div
            variants={slideInFromLeft(1.2)}
            className="mt-4 p-4 bg-[#1a1a1a] rounded-lg text-gray-300 max-w-[600px]"
          >
            <p>
              With hands-on experience in{" "}
              <span className="text-purple-400 font-semibold">
                MERN Stack
              </span>
              , I have developed projects like{" "}
              <span className="text-cyan-400 font-semibold">
                 Canteen Meal Ordering Website, and
                Resort Booking Platform
              </span>
              . I also actively contribute to{" "}
              <span className="text-purple-400 font-semibold">
                open source communities
              </span>{" "}
              and have participated in national-level hackathons.
            </p>
          </motion.div>
        )}
      </div>

      {/* Right Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
