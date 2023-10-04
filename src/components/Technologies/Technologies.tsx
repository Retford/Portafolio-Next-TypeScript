"use client"
import { fadeIn } from "@/utils/motionTransitions";
import { AvatarWorks } from "../AvatarWorks/AvatarWorks";
import { Circle } from "../Circle";
import { motion } from 'framer-motion'
import { Slider } from "./Slider";

export function Technologies() {
    return (
        <div className="flex items-center justify-center h-screen">
            <Circle />
            <AvatarWorks />

            <div className="flex flex-col md:items-center lg:items-start lg:flex-row gap-x-5">
                <div className="flex flex-col text-center lg:text-left md:w-full lg:w-[30vw] mb-10">
                    <motion.h1 className="mb-4 text-3xl"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        Mis <span className="text-secondary">Aptitudes</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="lg:max-w-md max-w-md md:max-w-[35rem] px-2">Dinámico, proactivo, trabajo en equipo, alegre, empátivo, responsable y leal.
                    </motion.p>
                </div>

                <motion.div
                    variants={fadeIn('up', 0.7)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <motion.h1 className="mb-4 text-3xl text-center"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        Mis <span className="text-secondary">Tecnologías</span>
                    </motion.h1>
                    <Slider />
                </motion.div>
            </div>
        </div>
    )
}
