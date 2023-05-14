'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  //   { name: "Contact Us", href: "/contact-us" },
]

export default function Navbar() {
  const [menu, setMenu] = React.useState<boolean>(false)
  const handleMenu = () => {
    setMenu(!menu)
  }

  const pathname = usePathname()

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex w-full items-center ${
        pathname === '/' ? 'bg-black/50' : 'bg-neutral/50'
      }`}
    >
      <div className='container'>
        <div className='flex items-center justify-between py-5'>
          <Link
            href='/'
            className='group flex items-center gap-2 text-lg font-semibold text-primary'
          >
            <Image src='/erc.png' alt='logo' width={40} height={40} priority />
            <span className='hidden group-hover:text-white lg:block'>
              Electrical Research Center
            </span>
            <span className='block group-hover:text-white  lg:hidden'>ERC</span>
          </Link>
          <div className='flex'>
            <button
              title='Menu'
              onClick={handleMenu}
              className={`block lg:hidden ${
                menu ? 'hamburger-active z-20' : ''
              }`}
            >
              <div className='hamburger-line origin-top-left transition duration-300 ease-in-out'></div>
              <div className='hamburger-line transition duration-300 ease-in-out'></div>
              <div className='hamburger-line origin-bottom-left transition duration-300 ease-in-out'></div>
            </button>
            <nav
              className={`${
                menu
                  ? 'max-w-screen absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black/90'
                  : 'hidden lg:flex'
              }`}
            >
              <ul className='flex flex-col gap-5 text-base font-semibold text-primary lg:flex-row'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`hover:text-white`}
                      onClick={() => setMenu(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
