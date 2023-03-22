import { FC } from 'react'
import Link from 'next/link'

interface Props {}

const NavbarTop: FC<Props> = (): JSX.Element => {
  return (
    <nav className='hidden md:block bg-white py-4 shadow-lg sticky z-10 top-0'>
      <div className='2xl:container mx-auto 2xl:max-w-screen-2xl flex items-center justify-between px-4'>
        <ul className='flex items-center md:gap-x-0 lg:gap-x-4 text-slate-800 md:text-md font-semibold'>
          <li>
            <Link
              className='block px-4 py-2 hover:bg-gray-100 rounded-md transition-all duration-500'
              href={'/'}
            >
              LOGO
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-500'
              href={'/'}
            >
              خانه
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-500'
              href={'/'}
            >
              تلفن همراه
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-500'
              href={'/'}
            >
              لپ تاپ
            </Link>
          </li>
          <li>
            <Link
              className='block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-500'
              href={'/'}
            >
              ساعت هوشمند
            </Link>
          </li>
        </ul>

        {/* search bar */}
        <div className='flex-1 max-w-xl mr-4'>
          <div className='bg-gray-100 rounded-lg flex items-center'>
            <span className='px-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <input
              className='focus:outline-none focus:ring-0 bg-transparent w-full border-none px-0 text-slate-800 md:text-sm lg:text-sm'
              type='text'
              placeholder='جستجوی نام محصول، نام برند، نام مدل و ...'
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarTop
