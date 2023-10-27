"use client";

import { fadeIn } from "@/utils/motionTransitions";
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
import { Circle } from "../Circle";
import { motion } from "framer-motion";

export function Contact() {
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
            Contacta <span className="text-secondary">conmigo.</span>
          </motion.h1>
          <motion.form
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-md text-justify text-slate-400 mt-8"
          >
            <input
              type="text"
              placeholder="Nombre y Apellidos"
              className="w-full mb-4 rounded-full p-2 bg-slate-950 text-white border-2 border-white font-mono"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full mb-4 rounded-full p-2 bg-slate-950 text-white border-2 border-white font-mono"
            />
            <textarea
              placeholder="Message"
              className="w-full mb-4 rounded-md p-2 bg-slate-950 text-white border-2 border-white font-mono"
            ></textarea>
            <button className="w-full mb-6 p-2 bg-slate-950 text-secondary rounded-full border-2 border-secondary hover:shadow-md hover:shadow-secondary">
              Enviar
            </button>
          </motion.form>
        </div>
        <motion.div
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          animate="show"
          exit="hidden"
        ></motion.div>
      </div>
    </div>
  );
}
