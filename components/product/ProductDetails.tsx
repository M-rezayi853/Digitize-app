import { FC, useState } from 'react'
import Image from 'next/image'

interface Props {}

const ProductDetails: FC<Props> = (): JSX.Element => {
  const [color, setColor] = useState('red')

  const clickHandler = (color: string) => {
    setColor(color)
  }

  return (
    <div className='flex flex-col lg:flex-row md:bg-white rounded-lg md:p-4 md:py-8'>
      {/* single product */}
      <div className='flex flex-col items-center gap-y-9 md:flex-auto md:flex-row md:w-full md:justify-start md:gap-x-8 md:items-start'>
        <div className='w-4/5 max-w-[250px] xl:max-w-xs'>
          <Image
            src='/assets/images/img-3.png'
            alt='iphone'
            width={500}
            height={500}
          />

          <div className='hidden md:flex items-center justify-center gap-x-4 mt-2 px-2'>
            <div className='border border-gray-400 rounded-lg cursor-pointer'>
              <Image
                className='w-full h-auto p-3'
                src='/assets/images/img-3.png'
                alt='iphone'
                width={500}
                height={500}
              />
            </div>

            <div className='border border-gray-400 rounded-lg cursor-pointer'>
              <Image
                className='w-full h-auto p-3'
                src='/assets/images/img-3.png'
                alt='iphone'
                width={500}
                height={500}
              />
            </div>

            <div className='border border-gray-400 rounded-lg cursor-pointer'>
              <Image
                className='w-full h-auto p-3'
                src='/assets/images/img-3.png'
                alt='iphone'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className=''>
          <div className='mb-6 md:mb-4 text-center md:text-start'>
            <h1 className='text-slate-800 font-bold text-lg mb-1 md:mb-2 md:text-2xl'>
              گوشی آیفون ۱۳ ۲۵۶ گیگابایت
            </h1>
            <h2 className='font-thin text-gray-500 md:text-lg'>
              Apple iphone 13 256 GB
            </h2>
          </div>

          <hr className='hidden md:block mb-4 border-gray-200' />

          {/* color selection */}
          <div className='flex items-center justify-evenly w-full mb-5 md:justify-between'>
            <span className='text-slate-800 text-lg md:text-xl font-semibold'>
              انتخاب رنگ :
            </span>
            <div className='flex items-center'>
              <div
                className={`${
                  color === 'red' ? 'ring-1 ring-red-400' : ''
                } w-8 h-8 md:w-8 md:h-8 rounded-full cursor-pointer bg-red-400 border-2 border-white flex items-center justify-center`}
                onClick={() => clickHandler('red')}
              >
                {color === 'red' && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-6 h-6 md:w-6 md:h-6 fill-white'
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
                } w-8 h-8 md:w-8 md:h-8 rounded-full cursor-pointer bg-blue-400 border-2 border-white flex items-center justify-center -mr-1.5`}
                onClick={() => clickHandler('blue')}
              >
                {color === 'blue' && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-6 h-6 md:w-6 md:h-6 fill-white'
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
                } w-8 h-8 md:w-8 md:h-8 rounded-full cursor-pointer bg-green-400 border-2 border-white flex items-center justify-center -mr-1.5`}
                onClick={() => clickHandler('green')}
              >
                {color === 'green' && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-6 h-6 md:w-6 md:h-6 fill-white'
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

          {/* seller detail */}
          <div className='text-slate-800 flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-5 text-sm md:hidden mb-5'>
            <div className='flex items-center gap-x-2 md:gap-x-4'>
              <div className='flex items-center'>
                <div className='flex items-center'>
                  <span className='flex items-center'>
                    <span className='mb-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='19'
                        fill='none'
                      >
                        <circle cx='12' cy='8' r='8' fill='#E2E2E2' />
                        <path
                          stroke='#222F5D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='.875'
                          d='M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62'
                        />
                        <path
                          stroke='#222F5D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='.875'
                          d='M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z'
                        />
                        <path
                          stroke='#222F5D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='.875'
                          d='M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z'
                        />
                      </svg>
                    </span>
                    <span className='mr-1 font-medium'>فروشنده :</span>
                  </span>
                </div>
                <span className='font-light mr-2'>دیجی تایز</span>
              </div>

              <div className='flex items-center'>
                <div className='flex items-center'>
                  <span className='flex items-center'>
                    <span className='mb-1'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='21'
                        height='19'
                        fill='none'
                      >
                        <circle cx='13' cy='8' r='8' fill='#E2E2E2' />
                        <path
                          stroke='#222F5D'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='1.063'
                          d='M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z'
                        />
                      </svg>
                    </span>
                    <span className='mr-1 font-medium'>گارانتی :</span>
                  </span>
                </div>
                <span className='font-light mr-2'>۱۸ ماه زرین خدمت</span>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center'>
                <span className='flex items-center'>
                  <span className='mb-1'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='21'
                      fill='none'
                    >
                      <circle cx='12' cy='8' r='8' fill='#E2E2E2' />
                      <path
                        stroke='#222F5D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.125'
                        d='M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z'
                      />
                      <path
                        stroke='#222F5D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.125'
                        d='M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z'
                      />
                      <path
                        stroke='#222F5D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='1.125'
                        d='M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z'
                      />
                      <path
                        stroke='#222F5D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-miterlimit='10'
                        stroke-width='1.125'
                        d='M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z'
                      />
                      <path
                        stroke='#222F5D'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-miterlimit='10'
                        stroke-width='1.125'
                        d='M3.5 7.499v1l-.833.5'
                      />
                    </svg>
                  </span>
                  <span className='mr-1 font-medium'>ارسال توسط :</span>
                </span>
              </div>
              <span className='font-light mr-2'>انبار تهران</span>
            </div>
          </div>

          {/* product detail */}
          <div className='text-slate-700 font-bold bg-white md:bg-none md:p-0 p-4 rounded-lg w-full'>
            <h2 className='text-base md:text-xl mb-5'>ویژگی های کالا:</h2>
            <ul className='list-disc text-sm md:text-lg flex flex-col gap-y-2 marker:text-orange-500 list-inside'>
              <li className='flex flex-col gap-y-2 lg:block'>
                <span className='font-light text-slate-600'>حافظه داخلی: </span>
                <span>256 گیگابایت</span>
              </li>

              <li className='flex flex-col gap-y-2 lg:block'>
                <span className='font-light text-slate-600'>
                  بازه اندازه صفحه نمایش:{' '}
                </span>
                <span>0.6 اینج و بزرگتر</span>
              </li>

              <li className='flex flex-col gap-y-2 lg:block'>
                <span className='font-light text-slate-600'>
                  شبکه های ارتباطی:{' '}
                </span>
                <span>2G &bull; 3G &bull; 4G &bull; 5G</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* seller detail */}
      <div className='lg:w-1/3 xl:w-1/2 hidden md:block md:mt-10 lg:mt-0'>
        <div className='text-slate-800 flex flex-col gap-y-4 bg-gray-50 p-4 rounded-md w-full'>
          <div className='flex flex-row lg:flex-col xl:flex-row items-start gap-y-1'>
            <div className=''>
              <span className='flex items-center'>
                <span className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='19'
                    fill='none'
                  >
                    <circle cx='12' cy='8' r='8' fill='#E2E2E2' />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='.875'
                      d='M1.756 11.545v2.62c0 2.618 1.05 3.668 3.669 3.668h3.144c2.62 0 3.67-1.05 3.67-3.669v-2.62'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='.875'
                      d='M7 12c1.068 0 1.855-.87 1.75-1.937l-.385-3.897H5.641l-.39 3.897c-.106 1.067.682 1.936 1.75 1.936Z'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='.875'
                      d='M10.681 12c1.178 0 2.042-.957 1.925-2.13l-.163-1.604c-.21-1.517-.794-2.1-2.322-2.1h-1.78l.41 4.09c.098.962.967 1.743 1.93 1.743ZM3.29 12c.963 0 1.832-.782 1.925-1.745l.128-1.289.28-2.8H3.844c-1.528 0-2.111.583-2.321 2.1L1.365 9.87C1.248 11.043 2.112 12 3.29 12ZM7 14.916c-.974 0-1.458.484-1.458 1.458v1.459h2.917v-1.459c0-.974-.485-1.458-1.459-1.458Z'
                    />
                  </svg>
                </span>
                <span className='mr-1 font-medium'>فروشنده :</span>
              </span>
            </div>
            <span className='font-light mr-2'>دیجی تایز</span>
          </div>
          <div className='flex flex-row lg:flex-col xl:flex-row items-start gap-y-1'>
            <div className=''>
              <span className='flex items-center'>
                <span className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='21'
                    height='19'
                    fill='none'
                  >
                    <circle cx='13' cy='8' r='8' fill='#E2E2E2' />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.063'
                      d='M7.43 3.58 3.897 4.91c-.815.305-1.48 1.268-1.48 2.132v5.263c0 .836.552 1.934 1.225 2.437l3.046 2.274c.999.75 2.642.75 3.64 0l3.046-2.274c.673-.503 1.226-1.6 1.226-2.437V7.043c0-.87-.666-1.834-1.48-2.139L9.583 3.58c-.602-.22-1.566-.22-2.153 0Z'
                    />
                  </svg>
                </span>
                <span className='mr-1 font-medium'>گارانتی :</span>
              </span>
            </div>
            <span className='font-light mr-2'>۱۸ ماه زرین خدمت</span>
          </div>
          <div className='flex flex-row lg:flex-col xl:flex-row items-start gap-y-1'>
            <div className=''>
              <span className='flex items-center'>
                <span className='mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='21'
                    fill='none'
                  >
                    <circle cx='12' cy='8' r='8' fill='#E2E2E2' />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.125'
                      d='M10 6.333V13c0 .733-.6 1.333-1.333 1.333H1.334V10.08a2.6 2.6 0 0 0 2.06.92 2.563 2.563 0 0 0 1.733-.707c.207-.173.38-.393.513-.633.24-.407.373-.887.36-1.387a2.655 2.655 0 0 0-.906-1.94H10Z'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.125'
                      d='M14.667 14.333v2c0 1.107-.893 2-2 2H12C12 17.6 11.4 17 10.667 17s-1.333.6-1.333 1.333H6.667c0-.733-.6-1.333-1.333-1.333C4.6 17 4 17.6 4 18.333h-.667c-1.106 0-2-.893-2-2v-2h7.334C9.4 14.333 10 13.733 10 13V8.333h1.227c.48 0 .92.26 1.16.673L13.527 11h-.86c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667h2Z'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='1.125'
                      d='M5.333 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM10.667 19.667a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.667 13v1.333h-2a.669.669 0 0 1-.667-.666v-2c0-.367.3-.667.667-.667h.86l1.14 2Z'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                      stroke-width='1.125'
                      d='M6 8.333c0 .8-.353 1.513-.906 2a2.666 2.666 0 1 1-1.76-4.667A2.666 2.666 0 0 1 6 8.333Z'
                    />
                    <path
                      stroke='#222F5D'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-miterlimit='10'
                      stroke-width='1.125'
                      d='M3.5 7.499v1l-.833.5'
                    />
                  </svg>
                </span>
                <span className='mr-1 font-medium'>ارسال توسط :</span>
              </span>
            </div>
            <span className='font-light mr-2'>انبار تهران</span>
          </div>

          <div className='mt-10'>
            <span className='w-full text-orange-500 font-bold text-xl text-center block mb-4'>
              28,250,000 تومن
            </span>

            <button className='w-full py-3 text-white bg-orange-500 rounded-lg'>
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
