import { fadeIn } from '@/utils/motionTransitions';
import { motion } from 'framer-motion';

export function Introduction() {
  return (
    <div className='w-full z-10'>
      <div className='w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10'>
        <div className='container grid items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left'>
          <motion.div
            className='hidden mx-auto md:block w-80 h-80 rounded-full overflow-hidden xl:w-[500px] xl:h-[500px] lg:w-[400px] lg:h-[400px]'
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <img
              src='/assets/home-4.png'
              width='800'
              height='600'
              alt='Avatar'
              className='rounded-[45%] sombra'
            />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            animate='show'
            exit='hidden'
          >
            <h1 className='mt-36 sm:mt-10 mb-5 md:mt-0 text-xl lg:text-2xl leading-tight md:mb-10'>
              Hola, soy
              <br />
              <span className='text-2xl lg:text-4xl'>Retford O&#39;briam</span>
              <br />
              <span className='text-secondary mb-5 text-[1.75rem] lg:text-5xl leading-tight md:mb-10'>
                Desarrollador FrontEnd
              </span>
            </h1>

            <p className='max-w-sm mb-10 text-lg sm:max-w-full md:max-w-xs lg:max-w-sm xl:max-w-lg 2xl:max-w-2xl md:mx-0 md:mb-16 md:text-base lg:text-xl'>
              Bachiller en Ingeniería de Sistemas con experiencia en desarrollo
              frontend y una sólida base técnica. He trabajado en proyectos
              donde optimicé sitios web, desarrollé componentes reutilizables y
              gestioné servidores LAMP/LEMP, logrando soluciones escalables y
              funcionales. Domino tecnologías como React, NextJS, TailwindCSS,
              HTML, CSS y JavaScript, además de herramientas como WordPress y
              WooCommerce. Apasionado por el desarrollo web, estoy enfocado en
              crear plataformas innovadoras y de alto impacto.
            </p>

            <div className='flex flex-col items-center gap-3 mb-24 sm:mb-0 md:gap-10 md:flex-row'>
              <a
                href='/projects'
                className='px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'
              >
                Ver proyectos
              </a>
              <a
                href='/assets/CurriculumVitae.pdf'
                target='_blank'
                className='px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary'
              >
                Ver CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
