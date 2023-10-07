"use client"
import { motionTransitionsAbout } from "@/utils/motionTransitions";
import { Avatar } from "../Avatar";
import { motion } from 'framer-motion'
import { dataAboutSkills } from "./About.data";
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
                className="lg:flex lg:justify-center lg:items-start lg:gap-8 lg:mt-40 lg:mb-16">
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
                    {dataAboutSkills[index].skills.map(({ title, url, date, description }, index) => (
                        <div key={index} className="flex lg:max-w-xl gap-4 mx-auto flex-wrap">
                            <a href={url} target="_blank">
                                <h3 className="text-[#00FF00] font-black">
                                    <span>{title}</span> | <span>{date}</span>
                                </h3>
                            </a>
                            {description.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="text-sm w-full">{line}</p>
                            )
                            )}
                        </div>
                    ))}
                </div>
            </motion.div >
        </div >
    )
}
