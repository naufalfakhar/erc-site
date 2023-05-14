'use client'

import Footer from '@/components/Footer'
import { usePathname } from 'next/navigation'
import Projects from '@/data/projects.json'
import Image from 'next/image'

export default function Page() {
  const pathname = usePathname()
  const projectId = pathname.substring(10)
  const projectObj = Projects.find((project) => project.id === projectId)
  return (
    <>
      <div className='bg-dark text-white'>
        <div className='container flex items-center justify-center py-36'>
          <div className='flex flex-col items-center'>
            <h2 className='text-center text-4xl font-semibold uppercase leading-normal text-primary'>
              Project {projectObj?.name}
            </h2>
            {projectObj !== undefined && (
              <Image
                src={projectObj.image}
                alt={projectObj.name}
                width={500}
                height={500}
                className='mt-8 rounded-2xl'
              />
            )}
            <h3 className='font mt-8 text-center uppercase text-primary md:text-2xl'>
              deskripsi projek
            </h3>
            <p className='mt-4 text-justify'>{projectObj?.description}</p>
            <div className='mt-10 grid gap-8 md:grid-cols-3'>
              <div className='flex flex-col items-center'>
                <h3 className='text-center uppercase text-primary md:text-2xl'>
                  kontes yang diikuti
                </h3>
                <p className='mt-4 text-center capitalize'>
                  {projectObj?.contest}
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-center uppercase text-primary md:text-2xl'>
                  kategori
                </h3>
                <p className='mt-4 text-center capitalize'>
                  {projectObj?.category}
                </p>
              </div>
              <div className='flex flex-col items-center'>
                <h3 className='text-center uppercase text-primary md:text-2xl'>
                  Hasil
                </h3>
                <p className='mt-4 text-center capitalize'>
                  {projectObj?.result}
                </p>
              </div>
            </div>
            <h3 className='font mt-8 text-center uppercase text-primary md:text-2xl'>
              anggota projek
            </h3>
            <ul className='text-center'>
              {projectObj?.members?.map((member) => {
                return (
                  <li key={member.name}>
                    {member.name} ({member.nim})
                  </li>
                )
              })}
              {projectObj?.members2021 && (
                <div className='grid grid-cols-2 gap-4 '>
                  <div>
                    <h3 className='mt-4 uppercase text-primary'>tim 2021</h3>
                    {projectObj?.members2021?.map((member) => {
                      return (
                        <li key={member.name}>
                          {member.name} ({member.nim})
                        </li>
                      )
                    })}
                  </div>
                  <div>
                    <h3 className='mt-4 uppercase text-primary'>tim 2022</h3>
                    {projectObj?.members2022?.map((member) => {
                      return (
                        <li key={member.name}>
                          {member.name} ({member.nim})
                        </li>
                      )
                    })}
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
