import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Introduction() {
    return (
        <div className="w-full z-10">
            <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
                <div className="container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/home-4.png" priority width="800" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mt-10 mb-5 md:mt-0 text-xl lg:text-2xl leading-tight md:mb-10">Hola, soy<br />
                            <span className="text-2xl lg:text-4xl">Retford O&#39;briam</span><br />
                            <span className="text-secondary mb-5 text-[1.75rem] lg:text-5xl leading-tight md:mb-10">Desarrollador FrontEnd</span>
                        </h1>
                        <p className="max-w-sm mb-10 text-lg md:max-w-2xl md:mx-0 md:mb-16 md:text-xl">
                            Egresado de la carrera Ingeniería de Sistemas, apasionado por crear sitios web atractivos y funcionales. Mi enfoque está en convertir diseños en código limpio y eficiente, siempre buscando oportunidades para aprender y crecer en este campo. Estoy listo para enfrentar desafíos y colaborar en proyectos web emocionantes.
                        </p>

                        <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row">
                            <a href="/projects" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Ver proyectos
                            </a>
                            <a href="/contact" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contacta conmigo
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
