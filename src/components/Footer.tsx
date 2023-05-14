import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className='bg-neutral-dark text-white'>
      <div className='container h-full items-center py-10'>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='w-full text-base font-medium md:w-1/2'>
            <h2 className='mb-4 text-2xl font-bold text-primary lg:text-4xl'>
              Electrical Reseach Center
              <span className='block text-lg font-bold text-accent lg:text-3xl'>
                HME FKET ITPLN
              </span>
            </h2>
            <p>
              Menara PLN , JL. Lkr. Luar Barat, RT.1/RW.1, Duri Kosambi,
              Kecamatan Cengkareng, Jakarta Barat, Daerah Khusus Ibukota
              Jakarta. Kode Pos 11750
            </p>
          </div>
          <div className='flex w-full flex-col gap-2 text-sm md:w-1/3'>
            <div className='flex items-center gap-1'>
              <SocialIcon
                url='https://www.instagram.com/erc_itpln'
                fgColor='#d3dce6'
                bgColor='transparent'
              />
              @erc_itpln
            </div>
            <div className='flex items-center gap-1'>
              <SocialIcon
                url='mailto:electricalspecialteams@gmail.com'
                fgColor='#d3dce6'
                bgColor='transparent'
              />
              electricalspecialteams@gmail.com
            </div>
            <div className='flex items-center gap-1'>
              <SocialIcon
                url='https://www.linkedin.com/company/electrical-research-center-hme-fket-it-pln'
                fgColor='#d3dce6'
                bgColor='transparent'
              />
              Electrical Research Center HME FKET IT PLN
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='mx-auto flex max-w-lg items-center justify-center gap-10'></div>
        </div>
        <div className='my-2 border-t border-white'>
          <p className='pt-4 text-center text-sm font-medium text-neutral-light'>
            © Web Designed by Naufal - ERC Team 2022 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
