"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills, dataCounter } from "./About.data";
import CountUp from "react-countup";
import { useState } from "react";
import { BiDownArrow, BiLeftArrow, BiRightArrow } from "react-icons/bi";

export function About() {
    const [index, setIndex] = useState(0)

    return (
        <div className="items-center min-h-screen px-6 mx-auto align-middle mt-36 md:mt-0 md:flex justify-center pb-36 md:pb-0">
            <Avatar />

            <motion.div
                initial={motionTransitionsAbout.initial}
                animate={motionTransitionsAbout.animate}
                transition={motionTransitionsAbout.transition}
                className="lg:flex lg:justify-center lg:items-start lg:gap-8 lg:mt-40 lg:mb-16"

            >
                {/* <h1 className="mb-6 md:text-4xl">Acerca de <br /> <span className="text-secondary">MI</span></h1>
                <p>Soy una persona con competencias que ayudan a cumplir los objetivos de dónde me encuentre, me gusta estar en constante aprendizaje y si detecto habilidades carentes en mí, trabajo en ellos hasta obtenerlos, tengo la disponibilidad para mejorar cada día más, soy comprometido y responsable con mis actividades.</p> */}

                {/* <div className="grid justify-between grid-cols-2 gap-3 my-8 md:flex md:grid-cols-4 md:gap-6">
                    {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
                        <div key={id} className={`${lineRight && 'ltr'}`}>
                            <div className={`${lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${lineRightMobile && 'border-e-gray-100'}`}>
                                <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                                    + <CountUp end={endCounter} start={0} duration={5} />
                                </p>
                                <p className="text-xs uppercase max-w-[100px]">
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="flex flex-col mt-44 lg:mt-0 mb-3 md:flex-row lg:flex-col justify-evenly md:mt-28 md:mb-5">
                    {dataAboutSkills.map((dataText, itemIndex) => {
                        const { id, text } = dataText;

                        return (
                            <div key={id}
                                className={`${index === id ? 'text-secondary duration-300 transition-all border-secondary' : 'border-white'} 
                                        cursor-pointer md:text-lg relative px-2 md:px-8 py-4 border-2 rounded-xl flex justify-between items-center my-3`}
                                onClick={() => setIndex(itemIndex)}
                            >
                                <p className="mr-4 text-md md:text-lg">{text}</p>
                                {index === id ? (
                                    <>
                                        <span className="hidden lg:block">
                                            <BiRightArrow />
                                        </span>
                                        <span className="lg:hidden">
                                            <BiDownArrow />
                                        </span>
                                    </>
                                ) : (
                                    <BiLeftArrow />
                                )}
                            </div>
                        )
                    })}
                </div>
                <div className="flex flex-col gap-4 max-w-4xl p-4 mx-auto bg-secondary/20 rounded-xl lg:min-h-[560px]">
                    {dataAboutSkills[index].skills.map((items, index) => (
                        <div key={index} className="flex lg:max-w-xl gap-4 mx-auto flex-wrap">
                            <h3 className="text-[#00FF00] font-black">
                                <span>{items.title}</span> | <span>{items.date}</span>
                            </h3>
                            {items?.description.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="text-sm w-full">{line}</p>
                            )
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
}
