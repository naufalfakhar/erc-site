import Image from 'next/image'
import Link from 'next/link'
import Projects from '@/data/projects.json'

export default function Section3() {
  return (
    <div className='bg-neutral text-white'>
      <div className='container flex h-full items-center justify-center py-36'>
        <div className='flex flex-col gap-16'>
          <h2 className='text-center text-4xl font-semibold uppercase leading-normal tracking-[0.5em] text-primary'>
            Projects
          </h2>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
            {Projects &&
              Projects.filter((_, index) => {
                return index < 3
              }).map((project) => {
                return (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className='flex max-w-md flex-col-reverse rounded-xl bg-dark transition hover:shadow-xl'
                  >
                    <div className='p-4'>
                      <div className='text-center'>{project.name}</div>
                      <time className='flex items-center justify-between gap-4 text-xs font-bold uppercase text-white'>
                        <span>{project.year}</span>
                        <span className='h-0.5 w-px flex-1 bg-white' />
                        <span>{project.month}</span>
                      </time>
                    </div>
                    <div className='relative w-full grow'>
                      <Image
                        alt={project.name}
                        src={project.image}
                        fill
                        blurDataURL={project.image}
                        className='!relative rounded-t-xl object-cover'
                      />
                    </div>
                  </Link>
                )
              })}
          </div>
          <Link
            href={'/projects'}
            className='relative z-10 flex w-full max-w-fit gap-2 self-end rounded-xl bg-primary px-6 py-4 text-base font-semibold text-gray-900 transition hover:bg-accent'
          >
            Projek Lainnya
            <svg
              className='w-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
