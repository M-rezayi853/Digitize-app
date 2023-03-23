import { FC } from 'react'
import Image from 'next/image'

interface Props {}

const CartItems: FC<Props> = (): JSX.Element => {
  return (
    <div className='flex items-start gap-x-4'>
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

      <div className='hidden md:flex flex-col w-1/3 max-w-sm'>
        <div className='bg-white mb-5 px-4 py-5 rounded-lg w-full text-slate-800 font-medium'>
          <div className='flex items-center justify-between mb-5'>
            <span className='text-lg'>مجموع قیمت: </span>
            <span className='text-orange-500'>35,450,000 تومان</span>
          </div>

          <div className='flex items-center justify-between mb-5'>
            <span className='font-light text-lg'>کد تخفیف:</span>
            <div className='flex items-stretch justify-between overflow-hidden rounded-xl bg-gray-200'>
              <input
                className='border-0 w-full max-w-[150px] bg-transparent p-2 text-gray-700 outline-none focus:outline-none'
                type='text'
                placeholder='AS-DSE'
                dir='ltr'
              />
              <button className='border-0 bg-orange-500 px-4 text-white outline-none'>
                تایید
              </button>
            </div>
          </div>

          <div className='flex items-center justify-between mb-11'>
            <span className='text-lg'>تخفیف: </span>
            <span className='text-orange-500'>450,000 تومان</span>
          </div>

          <div className='flex items-center justify-between'>
            <span className='text-lg'>قیمت نهایی: </span>
            <span className='text-orange-500'>35,000,000 تومان</span>
          </div>
        </div>

        <div>
          <button className='w-full mb-4 text-white bg-orange-500 rounded-md text-lg p-3'>
            سبد خرید
          </button>

          <button className='w-full mb-4 text-orange-500 bg-transparent border border-orange-500 p-3 rounded-md text-lg'>
            انصراف از خرید
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
