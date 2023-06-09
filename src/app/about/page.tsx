import Footer from '@/components/Footer'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
      <div className='bg-dark text-white'>
        <div className='container flex h-full items-center justify-center py-36'>
          <div className='flex flex-col items-center gap-8'>
            <h2 className='text-center text-4xl font-semibold uppercase leading-normal text-primary'>
              About Us
            </h2>
            <h3 className='text-center uppercase text-primary md:text-2xl'>
              apa itu erc?
            </h3>
            <p className='text-justify'>
              ERC atau Electrical Research Center adalah sebuah wadah yang
              berfokus pada inovasi teknologi dan sebagai inkubator utama ide
              inovasi teknologi yang berada di dalam naungan HME FKET IT-PLN.
            </p>
            <h3 className='text-center uppercase text-primary md:text-2xl'>
              kapan berdirinya erc?
            </h3>
            <p className='text-justify'>
              ERC berdiri sejak 7 November 2019. dimana pada tanggal tersebut
              merupakan pengumuman anggota pertama dari ERC. Sebelumnya pada
              tanggal tersebut ERC masih bernama Electrical Special Team, dan
              secara resmi berubah nama menjadi Electrical Research Center pada
              awal Desember 2019 hingga saat ini.
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <div>
                <h3 className='mb-4 text-center uppercase text-primary md:text-2xl'>
                  visi
                </h3>
                <p className='text-justify capitalize'>
                  menjadi pusat penelitian dan pengembangan inovasi di bidang
                  teknik elektro yang memiliki kualitas nasional serta menjadi
                  garda terdepan dalam kemajuan inovasi pada jurusan teknik
                  elektro
                </p>
              </div>
              <div>
                <h3 className='mb-4 text-center uppercase text-primary md:text-2xl'>
                  misi
                </h3>
                <ul className='list-inside list-decimal space-y-2'>
                  <li>
                    Mengadakan penelitian & Inovasi Internal dalam lingkup ITPLN
                  </li>
                  <li>
                    Mengikuti berbagai macam kompetisi Nasional & Internasional
                    yagn terkait dengan Inovasi & Penelitian
                  </li>
                  <li>
                    Menjadi inkubator Ide mahasiswa Teknik Elektro serta
                    mewadahi mahasiswa Teknik Elektro dalam mewujudkan Ide
                  </li>
                  <li>
                    Melakukan Kerjasama dengan Pihak Internal ITPLN maupun
                    institusi external khususnya dalam pengembangan inovasi dan
                    penelitian
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                src='/filosofi-logo.jpeg'
                alt='filosofi logo'
                fill
                className='!relative object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
