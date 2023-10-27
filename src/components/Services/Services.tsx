"use client";

import { fadeIn } from "@/utils/motionTransitions";
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
import { Circle } from "../Circle";
import { motion } from "framer-motion";
import { Slider } from "./Slider";

export function Services() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Circle />
      <AvatarWorks />
      <div className="flex flex-col md:flex-row gap-x-5">
        <div className="flex flex-col text-center md:text-left md:w-[30vw] mb-10">
          <motion.h1
            className="mb-4 text-3xl"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Mis <span className="text-secondary">servicios.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md text-justify text-slate-400"
          >
            Gracias a la experiencia obtenida durante muchos años en la
            industria, puedo implementar todos mis conocimientos para
            desarrollar la plataforma que tienes en mente.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Slider />
        </motion.div>
      </div>
    </div>
  );
}
