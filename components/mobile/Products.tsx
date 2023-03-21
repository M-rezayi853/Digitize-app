import { FC, useState } from 'react'
import Image from 'next/image'

interface Props {}

const Products: FC<Props> = (): JSX.Element => {
  const [color, setColor] = useState('red')

  const clickHandler = (color: string) => {
    setColor(color)
  }

  return (
    <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div className='bg-white rounded-xl p-2 shadow-md'>
        <div className='mb-3 bg-gray-100 rounded-xl flex justify-center items-center p-5 max-h-36'>
          <Image
            className='flex justify-center items-center'
            src='/assets/images/img-1.png'
            width={100}
            height={100}
            alt='apple watch'
          />
        </div>
        {/* product description */}
        <div className='flex items-center justify-between w-full mb-3'>
          <span className='text-slate-200 text-sm md:text-base'>اپل</span>
          <div className='flex items-center'>
            <div
              className={`${
                color === 'red' ? 'ring-1 ring-red-400' : ''
              } w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer bg-red-400 border-2 border-white flex items-center justify-center`}
              onClick={() => clickHandler('red')}
            >
              {color === 'red' && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-4 h-4 md:w-6 md:h-6 fill-white'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </div>
            <div
              className={`${
                color === 'blue' ? 'ring-1 ring-blue-400' : ''
              } w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer bg-blue-400 border-2 border-white flex items-center justify-center -mr-1.5`}
              onClick={() => clickHandler('blue')}
            >
              {color === 'blue' && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-4 h-4 md:w-6 md:h-6 fill-white'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </div>
            <div
              className={`${
                color === 'green' ? 'ring-1 ring-green-400' : ''
              } w-6 h-6 md:w-8 md:h-8 rounded-full cursor-pointer bg-green-400 border-2 border-white flex items-center justify-center -mr-1.5`}
              onClick={() => clickHandler('green')}
            >
              {color === 'green' && (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-4 h-4 md:w-6 md:h-6 fill-white'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                    clipRule='evenodd'
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* product title */}
        <div className='text-slate-800 text-xs md:text-base font-bold mb-2'>
          ساعت هوشمند اپل سری ۶
        </div>

        <div className='text-orange-600 font-medium text-left text-sm mb-3'>
          48,250,000 تومان
        </div>

        <hr className='border-gray-200 mb-1' />

        <button className='w-full text-md md:text-lg font-bold text-orange-500 py-1'>
          مشاهده و سفارش
        </button>
      </div>

      {/*  */}
      <div className='bg-blue-100'>2</div>
      <div className='bg-blue-100'>3</div>
      <div className='bg-blue-100'>4</div>
      <div className='bg-blue-100'>5</div>
      <div className='bg-blue-100'>6</div>
      <div className='bg-blue-100'>7</div>
      <div className='bg-blue-100'>8</div>
      <div className='bg-blue-100'>9</div>
      <div className='bg-blue-100'>10</div>
    </div>
  )
}

export default Products
