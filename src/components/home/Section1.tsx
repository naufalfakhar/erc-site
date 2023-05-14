'use client'
import { motion } from 'framer-motion'

export default function Section1() {
  return (
    <div className='relative h-screen'>
      <motion.div
        className='absolute bottom-0 z-20 rounded-xl bg-black p-4 text-2xl font-bold text-white md:hidden'
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
      >
        scroll untuk selengkapnya
      </motion.div>
      <video
        src='/erc.mp4'
        className='h-full w-full object-cover lg:overflow-hidden'
        autoPlay
        muted
        loop
      />
    </div>
  )
}
