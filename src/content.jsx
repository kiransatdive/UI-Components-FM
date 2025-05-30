/* eslint-disable no-unused-vars */
import { motion, scale, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./App.css";

function Content() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [10, 0]);
  const translateY=useTransform(scrollYProgress,[0,0.1],[0,500]);
  const scale=useTransform(scrollYProgress,[0,0.1],[0.9,0.1]);

  const textScale=useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  const textTranslateY=useTransform(scrollYProgress, [0, 0.1], [0,100]);
  const textOpacity=useTransform(scrollYProgress, [0, 0.1], [1, 0.5]);
  const blur=useTransform(scrollYProgress, [0, 0.1], [0, 10]);

  const finalblur=useMotionTemplate`blur(${blur}px)`;
  return (
    <div
      ref={containerRef}
      className="h-[400vh] w-full bg-neutral-50 flex flex-col items-center py-40 [perspective:800px] [transform-style:preserve-3d]"
    >
      <motion.h1
      style={{
         scale: textScale,
          opacity: textOpacity,
          filter: finalblur, 
          y:textTranslateY,
        }}
      className="text-8xl font-bold text-center">
        Unleash the power of <br /> scroll animations.
      </motion.h1>

      <motion.div
        style={{
          rotateX,       // ✅ Animated rotateX
          translateZ: 100, // ✅ Optional animated transform
          translateY,
        }}
        className="w-[50%] rounded-3xl -mt-6 h-[800px] bg-white shadow-2xl p-2 border border-neutral-100"
      >
        <div className="bg-black h-full w-full rounded-[16px] p-12">
          <div className="bg-neutral-100 h-full w-full rounded-[12px]">
            <img
              src="https://assets.aceternity.com/linear-demo.webp"
              className="h-full w-full "
              height={1024}
              width={1024}
              alt="Linear Demo"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Content;
