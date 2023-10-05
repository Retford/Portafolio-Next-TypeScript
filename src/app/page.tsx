import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Portafolio Retford JB',
  description: 'Portfolio hecho con NextJS',
}


export default function Home() {
  return (
    <main className='bg-black h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
