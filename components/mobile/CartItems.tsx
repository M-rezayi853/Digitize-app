import { FC } from 'react'
import Image from 'next/image'

interface Props {}

const CartItems: FC<Props> = (): JSX.Element => {
  return (
    <div className='flex items-center gap-x-4'>
      <div className='flex flex-col gap-y-2 md:gap-y-4 flex-1'>
        <div className='bg-white rounded-lg py-4 px-2 flex items-stretch justify-between shadow-md'>
          <div className='w-20 md:w-24 h-auto my-auto'>
            <Image
              className=''
              src={'/assets/images/img-2.png'}
              width={500}
              height={500}
              alt='apple watch'
            />
          </div>

          <div className='flex flex-col justify-between text-sm md:text-lg flex-1'>
            <span className='text-slate-800'>ساعت هوشمند اپل سری ۷</span>
            <span className='text-orange-500 font-semibold'>
              13,250,000 تومان
            </span>
          </div>

          <div className='flex flex-col justify-between items-end'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 md:w-6 md:h-6 stroke-orange-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>

            <div className='flex items-center gap-x-2'>
              <span className='flex items-center justify-center rounded-full bg-gray-200 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </span>
              <span className=''>1</span>
              <span className='flex items-center justify-center rounded-full bg-orange-300 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5 stroke-orange-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12h-15'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg py-4 px-2 flex items-stretch justify-between shadow-md'>
          <div className='w-20 md:w-24 h-auto my-auto'>
            <Image
              className=''
              src={'/assets/images/img-2.png'}
              width={500}
              height={500}
              alt='apple watch'
            />
          </div>

          <div className='flex flex-col justify-between text-sm md:text-lg flex-1'>
            <span className='text-slate-800'>ساعت هوشمند اپل سری ۷</span>
            <span className='text-orange-500 font-semibold'>
              13,250,000 تومان
            </span>
          </div>

          <div className='flex flex-col justify-between items-end'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 md:w-6 md:h-6 stroke-orange-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>

            <div className='flex items-center gap-x-2'>
              <span className='flex items-center justify-center rounded-full bg-gray-200 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </span>
              <span className=''>1</span>
              <span className='flex items-center justify-center rounded-full bg-orange-300 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5 stroke-orange-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12h-15'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg py-4 px-2 flex items-stretch justify-between shadow-md'>
          <div className='w-20 md:w-24 h-auto my-auto'>
            <Image
              className=''
              src={'/assets/images/img-2.png'}
              width={500}
              height={500}
              alt='apple watch'
            />
          </div>

          <div className='flex flex-col justify-between text-sm md:text-lg flex-1'>
            <span className='text-slate-800'>ساعت هوشمند اپل سری ۷</span>
            <span className='text-orange-500 font-semibold'>
              13,250,000 تومان
            </span>
          </div>

          <div className='flex flex-col justify-between items-end'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 md:w-6 md:h-6 stroke-orange-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>

            <div className='flex items-center gap-x-2'>
              <span className='flex items-center justify-center rounded-full bg-gray-200 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </span>
              <span className=''>1</span>
              <span className='flex items-center justify-center rounded-full bg-orange-300 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5 stroke-orange-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12h-15'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className='bg-white rounded-lg py-4 px-2 flex items-stretch justify-between shadow-md'>
          <div className='w-20 md:w-24 h-auto my-auto'>
            <Image
              className=''
              src={'/assets/images/img-2.png'}
              width={500}
              height={500}
              alt='apple watch'
            />
          </div>

          <div className='flex flex-col justify-between text-sm md:text-lg flex-1'>
            <span className='text-slate-800'>ساعت هوشمند اپل سری ۷</span>
            <span className='text-orange-500 font-semibold'>
              13,250,000 تومان
            </span>
          </div>

          <div className='flex flex-col justify-between items-end'>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 md:w-6 md:h-6 stroke-orange-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </span>

            <div className='flex items-center gap-x-2'>
              <span className='flex items-center justify-center rounded-full bg-gray-200 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  />
                </svg>
              </span>
              <span className=''>1</span>
              <span className='flex items-center justify-center rounded-full bg-orange-300 w-4 h-4 md:w-6 md:h-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3 md:w-5 md:h-5 stroke-orange-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12h-15'
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-red-200 hidden md:flex w-1/3'>cart summary</div>
    </div>
  )
}

export default CartItems
