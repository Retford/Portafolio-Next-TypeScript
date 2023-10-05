"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'

export function AvatarWorks() {

    return (
        <motion.div variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="bottom-0 2xl:bottom-[5%] 2xl:left-[5%] left-0 hidden md:inline-block md:fixed -z-20">
            <img src="/assets/avatar-works.png" alt="Avatar works" width="350" height="350" className="h-full" />
        </motion.div>
    )
}
