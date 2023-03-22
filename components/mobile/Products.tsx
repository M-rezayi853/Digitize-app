import { FC, useState } from 'react'
import Image from 'next/image'

interface Props {}

const products = [
  {
    id: 1,
    title: 'ساعت هوشمند اپل سری 7',
    price: '48,250,000 تومان',
  },
  {
    id: 2,
    title: 'ساعت هوشمند اپل سری 3',
    price: '27,000,000 تومان',
  },
  {
    id: 3,
    title: 'ساعت هوشمند اپل سری 5',
    price: '14,400,000 تومان',
  },
  {
    id: 4,
    title: 'ساعت هوشمند اپل سری 1',
    price: '22,980,000 تومان',
  },
  {
    id: 5,
    title: 'ساعت هوشمند اپل سری 6',
    price: '42,390,000 تومان',
  },
  {
    id: 6,
    title: 'ساعت هوشمند اپل سری 8',
    price: '48,200,000 تومان',
  },
]

const Products: FC<Props> = (): JSX.Element => {
  const [color, setColor] = useState('red')

  const clickHandler = (color: string) => {
    setColor(color)
  }

  return (
    <div className='grid gap-x-2 sm:gap-x-4 lg:gap-x-6 gap-y-8 md:gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product) => (
        <div className='bg-white rounded-xl p-2 shadow-md' key={product.id}>
          <div className='mb-3 bg-gray-100 rounded-xl flex justify-center items-center p-2'>
            <Image
              className='flex justify-center items-center'
              src='/assets/images/img-2.png'
              width={500}
              height={500}
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
          <div className='text-slate-800 text-xs sm:text-base font-bold mb-2'>
            {product.title}
          </div>

          <div className='text-orange-600 font-medium text-left text-sm sm:text-base mb-3'>
            {product.price}
          </div>

          <hr className='border-gray-200 mb-1' />

          <button className='w-full text-md md:text-lg font-bold text-orange-500 py-1'>
            مشاهده و سفارش
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products
