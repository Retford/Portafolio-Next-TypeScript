"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { AvatarWorks } from "../AvatarWorks/AvatarWorks"
import { Circle } from "../Circle"
import { motion } from 'framer-motion'
import { cardContent } from "./Project.data"
import { useState } from "react"
import { FiExternalLink } from 'react-icons/fi'

export function Project() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "360px",
            opacity: 1,
            'background-size': 'contain'
        },
        collapsed: {
            width: "280px",
            opacity: 0.2,
            'background-size': 'cover'
        }
    }

    return (
        <div className="h-screen md:mx-40">
            <div className="grid pt-8 pb-32 md:min-h-screen mt-28 place-items-center md:mt-32 md:pt-0">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 text-2xl text-center md:text-4-xl"
                    >Mis proyectos<span className="text-secondary"> realizados.</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row flex-wrap justify-center pt-20"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills, url }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`,
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>

                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-3">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                    <a href={url} target="_blank">
                                                        <FiExternalLink size='40' />
                                                    </a>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
