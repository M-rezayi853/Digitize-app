import { FC } from 'react'

interface Props {
  title: string
}

const Navbar: FC<Props> = ({ title }): JSX.Element => {
  return (
    <div className='flex md:hidden items-center justify-between mb-6'>
      <div className='w-7 h-7 bg-white shadow-lg flex items-center justify-center rounded'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-5 h-5 fill-slate-800'
        >
          <path
            fillRule='evenodd'
            d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
            clipRule='evenodd'
          />
        </svg>
      </div>
      <div className='text-lg font-bold text-slate-800'>{title}</div>
      <div className='w-7 h-7 bg-white shadow-lg flex items-center justify-center rounded'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-5 h-5 fill-slate-800'
        >
          <path
            fillRule='evenodd'
            d='M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  )
}

export default Navbar
