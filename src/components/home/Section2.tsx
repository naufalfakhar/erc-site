import Image from 'next/image'
import Link from 'next/link'

export default function Section2() {
  return (
    <div className='bg-dark text-white'>
      <div className='container flex w-full flex-col items-center gap-10 py-24 lg:py-36'>
        <div className='flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-0'>
          <div className='flex w-full flex-col gap-4 lg:w-1/2 '>
            <div>
              <h1 className='text-3xl font-bold text-primary lg:text-5xl'>
                Electrical Reseach Center
                <span className='block text-xl font-bold text-accent lg:text-3xl'>
                  HME FKET ITPLN
                </span>
              </h1>
              <q className='text-blue-light text-base font-medium lg:text-xl'>
                Inovasi Tanpa Batas
              </q>
            </div>
            <div>
              <p className='font-medium leading-relaxed'>
                Electrical Reseach Center (ERC) merupakan tim yang berdiri
                berada dibawah Himpunan Mahasiswa Elektro (HME) yang bergerak
                dalam bidang inovasi seperti Drone, Robot Sar, Robot Sumo, PLC
                dan inovasi lainnya.
              </p>
            </div>
            <Link
              href={'/about'}
              className='relative z-10 flex w-full max-w-fit gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-gray-900 transition hover:bg-accent'
            >
              Pelajari Lebih Lanjut
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
          <div className='flex w-full items-center justify-center lg:w-1/2'>
            <Image
              src='/erc-full.jpeg'
              width={0}
              height={0}
              sizes='100vw'
              className='h-auto w-full rounded-xl'
              blurDataURL='/erc-full.jpeg'
              alt='erc full team'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
