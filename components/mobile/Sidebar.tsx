import { FC, useState } from 'react'
import Link from 'next/link'

interface Props {}

const Sidebar: FC<Props> = (): JSX.Element => {
  const [isOpenBrand, setIsOpenBrand] = useState(true)
  const [isOpenColor, setIsOpenColor] = useState(false)
  const [isOpenPrice, setIsOpenPrice] = useState(false)

  const clickHandler = (value: boolean) => {
    setIsOpenBrand(!value)
  }

  return (
    <div className='bg-white p-5 rounded-xl px-6 max-h-[calc(100vh_-_140px)] overflow-auto sticky top-[105px]'>
      {/* categories */}
      <div className='bm-7'>
        <div className='text-xl font-bold text-orange-500 mb-5'>دسته بندی</div>
        <ul>
          <li className='mb-2'>
            <Link
              className='flex items-center text-slate-800 text-md py-2 hover:bg-gray-50 rounded-md cursor-pointer'
              href='/'
            >
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    d='M13 4.75v7.5c0 3-.75 3.75-3.75 3.75h-4.5c-3 0-3.75-.75-3.75-3.75v-7.5C1 1.75 1.75 1 4.75 1h4.5c3 0 3.75.75 3.75 3.75ZM8.5 3.625h-3'
                  />
                  <path
                    stroke='currentColor'
                    d='M7 13.825A1.163 1.163 0 1 0 7 11.5a1.163 1.163 0 0 0 0 2.325Z'
                  />
                </svg>
              </span>
              <span className='mr-2'>تلفن همراه</span>
            </Link>
          </li>

          <li className='mb-2'>
            <Link
              className='flex items-center text-slate-800 text-md py-2 hover:bg-gray-50 rounded-md cursor-pointer'
              href='/'
            >
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    d='M4.293 1.333H11.7c2.373 0 2.967.594 2.967 2.96v4.22c0 2.374-.594 2.96-2.96 2.96H4.293c-2.366.007-2.96-.586-2.96-2.953V4.294c0-2.367.594-2.96 2.96-2.96ZM8 11.48v3.187M1.333 8.666h13.334M5 14.666h6'
                  />
                </svg>
              </span>
              <span className='mr-2'>لپ تاپ</span>
            </Link>
          </li>

          <li className='mb-2'>
            <Link
              className='flex items-center text-slate-800 text-md py-2 hover:bg-gray-50 rounded-md cursor-pointer'
              href='/'
            >
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    d='M5.666 12.667h4.667c1.553 0 2.333-.78 2.333-2.333V5.667c0-1.553-.78-2.333-2.333-2.333H5.666c-1.553 0-2.333.78-2.333 2.333v4.667c0 1.553.78 2.333 2.333 2.333ZM10.666 1.333H5.333M10.666 14.666H5.333'
                  />
                  <path stroke='currentColor' d='M7.667 6.333v2h2' />
                </svg>
              </span>
              <span className='mr-2'>ساعت هوشمند</span>
            </Link>
          </li>
        </ul>
      </div>

      <hr className='border-gray-100 my-3' />

      {/* desktop filters */}
      <div className='bm-7'>
        <div className='text-xl font-bold text-orange-500 mb-5'>فیلتر</div>

        {/* acc 1 */}
        <div className='mb-4'>
          {/* acc 1 header */}
          <div
            className='flex items-center justify-between  hover:bg-gray-50 cursor-pointer rounded-md w-full mb-2'
            onClick={() => clickHandler(isOpenBrand)}
          >
            <div className='flex items-center text-slate-800 text-md py-2'>
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                >
                  <path
                    fill='currentColor'
                    d='M12.833 13.271H1.167a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.437h11.666a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.437Z'
                  />
                  <path
                    fill='currentColor'
                    d='M2.158 12.833h-.875l.03-7.017c0-.496.227-.957.618-1.26l4.083-3.18a1.61 1.61 0 0 1 1.972 0l4.083 3.174c.385.303.619.776.619 1.266v7.017h-.875V5.821a.747.747 0 0 0-.28-.577L7.449 2.07a.735.735 0 0 0-.898 0L2.468 5.25a.727.727 0 0 0-.28.571l-.03 7.012Z'
                  />
                  <path
                    fill='currentColor'
                    d='M9.917 13.27H4.083a.44.44 0 0 1-.437-.437V7.291c0-.723.589-1.312 1.312-1.312h4.084c.723 0 1.312.59 1.312 1.313v5.541a.44.44 0 0 1-.437.438Zm-5.396-.874h4.958V7.29a.44.44 0 0 0-.437-.437H4.958a.44.44 0 0 0-.437.438v5.104Z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.833 10.791a.44.44 0 0 1-.437-.437v-.875a.44.44 0 0 1 .437-.438.44.44 0 0 1 .438.438v.875a.44.44 0 0 1-.438.438ZM7.875 4.813h-1.75a.44.44 0 0 1-.438-.438.44.44 0 0 1 .438-.438h1.75a.44.44 0 0 1 .438.438.44.44 0 0 1-.438.438Z'
                  />
                </svg>
              </span>

              <span className='mr-2'>برند محصول</span>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`${
                isOpenBrand ? 'rotate-180 transition-all duration-500' : ''
              } w-5 h-5`}
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          {/* acc 1 content */}
          {isOpenBrand && (
            <div className='py-1 flex flex-col gap-y-2'>
              <div
                className='flex items-center'
                onClick={() => setIsOpenBrand(false)}
              >
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='apple'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='apple'
                >
                  اپل
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='samsung'
                  checked
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='samsung'
                >
                  سامسونگ
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='xiaomi'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='xiaomi'
                >
                  شیائومی
                </label>
              </div>
            </div>
          )}
        </div>

        {/* acc 2 */}
        <div className='mb-4'>
          {/* acc 1 header */}
          <div
            className='flex items-center justify-between  hover:bg-gray-50 cursor-pointer rounded-md w-full mb-2'
            onClick={() => setIsOpenColor(!isOpenColor)}
          >
            <div className='flex items-center text-slate-800 text-md py-2'>
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    d='M5.833 2.625V10.5c0 .63-.256 1.207-.665 1.627l-.023.024a1.83 1.83 0 0 1-.163.146 2.041 2.041 0 0 1-.578.35c-.064.029-.128.052-.192.075-.228.076-.473.111-.712.111a2.48 2.48 0 0 1-.467-.046c-.075-.018-.151-.036-.227-.059a2.117 2.117 0 0 1-.268-.099c0-.006 0-.006-.006 0a2.946 2.946 0 0 1-.467-.286l-.006-.006a1.598 1.598 0 0 1-.21-.186c-.064-.07-.128-.14-.192-.216a2.94 2.94 0 0 1-.286-.467c.006-.006.006-.006 0-.006 0 0 0-.005-.006-.011-.035-.082-.064-.17-.093-.257-.024-.076-.041-.152-.059-.228a2.483 2.483 0 0 1-.046-.466V2.625c0-.875.583-1.458 1.458-1.458h1.75c.875 0 1.458.583 1.458 1.458Z'
                  />
                  <path
                    stroke='currentColor'
                    d='M12.833 9.625v1.75c0 .875-.583 1.458-1.458 1.458H3.5c.24 0 .484-.035.712-.11.064-.024.128-.047.192-.077.204-.081.403-.198.578-.35.052-.04.11-.093.163-.145l.023-.024 3.967-3.96h2.24c.875 0 1.458.583 1.458 1.458ZM2.806 12.729a2.237 2.237 0 0 1-.957-.578 2.237 2.237 0 0 1-.577-.957c.227.73.805 1.307 1.534 1.534Z'
                  />
                  <path
                    stroke='currentColor'
                    d='m10.716 6.586-1.581 1.58-3.967 3.961c.409-.42.665-.997.665-1.627V4.865l1.581-1.58c.618-.62 1.447-.62 2.065 0l1.237 1.236c.618.618.618 1.446 0 2.065ZM3.5 11.083a.583.583 0 1 0 0-1.167.583.583 0 0 0 0 1.167Z'
                  />
                </svg>
              </span>

              <span className='mr-2'>رنگ محصول</span>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`${
                isOpenColor ? 'rotate-180 transition-all duration-500' : ''
              } w-5 h-5`}
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          {/* acc 1 content */}
          {isOpenColor && (
            <div className='py-1 flex flex-col gap-y-2'>
              <div
                className='flex items-center'
                onClick={() => setIsOpenColor(false)}
              >
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='blue'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='blue'
                >
                  آبی
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='orange'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='orange'
                >
                  نارنجی
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='green'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='green'
                >
                  سبز
                </label>
              </div>
            </div>
          )}
        </div>

        {/* acc 3 */}
        <div className=''>
          {/* acc 1 header */}
          <div
            className='flex items-center justify-between  hover:bg-gray-50 cursor-pointer rounded-md w-full mb-2'
            onClick={() => setIsOpenPrice(!isOpenPrice)}
          >
            <div className='flex items-center text-slate-800 text-md py-2'>
              <span className='relative w-5 h-5 rounded-full bg-gray-100 ml-2 mb-2'>
                <svg
                  className='w-4 h-5 absolute top-1.5 right-1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='14'
                  height='14'
                  fill='none'
                >
                  <path
                    stroke='currentColor'
                    d='M10.523 7.904c-.245.239-.385.583-.35.95.053.63.63 1.091 1.26 1.091h1.109v.695a2.198 2.198 0 0 1-2.194 2.193H3.652a2.198 2.198 0 0 1-2.194-2.193V6.714c0-1.208.986-2.193 2.194-2.193h6.696c1.208 0 2.194.985 2.194 2.193v.84h-1.179c-.326 0-.624.128-.84.35Z'
                  />
                  <path
                    stroke='currentColor'
                    d='M1.458 7.239V4.573c0-.694.426-1.313 1.074-1.558l4.631-1.75c.724-.274 1.5.263 1.5 1.039V4.52M13.16 8.15v1.2c0 .322-.257.584-.584.596h-1.143c-.63 0-1.208-.461-1.26-1.091a1.172 1.172 0 0 1 .35-.95c.216-.222.513-.35.84-.35h1.213a.599.599 0 0 1 .583.594ZM4.083 7h4.084'
                  />
                </svg>
              </span>

              <span className='mr-2'>محدوده قیمت</span>
            </div>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className={`${
                isOpenPrice ? 'rotate-180 transition-all duration-500' : ''
              } w-5 h-5`}
            >
              <path
                fillRule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          {/* acc 1 content */}
          {isOpenPrice && (
            <div className='py-1 flex flex-col gap-y-2'>
              <div
                className='flex items-center'
                onClick={() => setIsOpenPrice(false)}
              >
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='price1'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='price1'
                >
                  ۲.۵ میلیون
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='price2'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='price2'
                >
                  ۳ میلیون
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  className='cursor-pointer mr-2 form-checkbox rounded text-orange-500 focus:ring-orange-500'
                  type='checkbox'
                  name='brand'
                  id='price3'
                />
                <label
                  className='block w-full mr-3 cursor-pointer'
                  htmlFor='price3'
                >
                  ۱ میلیون
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
