"use client";

import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from "framer-motion";
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow } from "react-icons/bi";

export function About() {
  const [index, setIndex] = useState(0);

  return (
    <div className="items-center min-h-screen p-8 m-auto align-middle md:flex md:max-w-4xl pb-16 pt-20 md:pb-0">
      <Avatar />
      <motion.div
        initial={motionTransitionsAbout.initial}
        animate={motionTransitionsAbout.animate}
        transition={motionTransitionsAbout.transition}
      >
        <h1 className="mb-8 mt-16 md:text-4xl">
          Desarrollando webs con <br />{" "}
          <span className="text-secondary">diseños espectaculares</span>
        </h1>
        <p className="text-slate-400">
          Si deseas tener una web espectacular que se diferencie entre las demás
          solo tienes que ponerte en contacto conmigo y hacerlo realidad.
        </p>
        <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
          {dataCounter.map(
            ({ id, endCounter, text, lineRight, lineRightMobile }) => (
              <div key={id} className={`${lineRight && "ltr"}`}>
                <div
                  className={`${
                    lineRight &&
                    "px-4 border-2 border-transparent md:border-e-gray-100"
                  } ${lineRightMobile && "border-e-gray-100"}`}
                >
                  <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                    + <CountUp end={endCounter} start={0} duration={5} />
                  </p>
                  <p className="text-xs uppercase max-w-[100px]">{text}</p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col mb-3 md:flex-row justify-evenly md:mb-5">
          {dataAboutSkills.map((dataText, itemIndex) => {
            const { id, text } = dataText;
            return (
              <div
                key={id}
                className={`${
                  index === id
                    ? "text-secondary duration-300 transition-all border-secondary hover:shadow-md hover:shadow-secondary"
                    : "border-white hover:shadow-md hover:shadow-white/50"
                } 
                  cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                onClick={() => setIndex(itemIndex)}
              >
                <p className="mr-4 text-md md:text-lg">{text}</p>
                {index === id ? <BiDownArrow /> : <BiLeftArrow />}
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl">
          {dataAboutSkills[index].skills.map((items, index) => (
            <div
              key={index}
              className="flex justify-center max-w-md gap-4 mx-auto"
            >
              <span>{items.title} </span> - <span>{items.date}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
