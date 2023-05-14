import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Projects from '@/data/projects.json'
import Footer from '@/components/Footer'

export default function Section3() {
  return (
    <>
      <div className='bg-dark text-white'>
        <div className='container flex h-full items-center justify-center py-36'>
          <div className='flex flex-col gap-16'>
            <h2 className='text-center text-4xl font-semibold uppercase leading-normal text-primary'>
              Our Projects
            </h2>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
              {Projects.map((project) => {
                return (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className='flex max-w-md flex-col-reverse rounded-xl bg-neutral transition hover:shadow-xl'
                  >
                    <div className='p-4'>
                      <div className='text-center'>{project.name}</div>
                      <time className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-white'>
                        <span>{project.year}</span>
                        <span className='h-0.5 w-px flex-1 bg-white' />
                        <span>{project.month}</span>
                      </time>
                    </div>
                    <div className='w-full grow'>
                      <Image
                        alt={project.name}
                        src={project.image}
                        fill
                        blurDataURL={project.image}
                        className='!relative max-h-[336px] rounded-t-xl object-cover'
                      />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
