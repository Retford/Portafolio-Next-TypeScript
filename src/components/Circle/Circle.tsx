"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Circle() {
    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden " className="bottom-0 2xl:bottom-[5%] 2xl:right-[5%] right-0 hidden md:inline-block md:fixed -z-20">
            <Image src="/assets/circles.png" width="350" height="350" className="w-full h-full" alt="Circle" />
        </motion.div>
    )
}
