import { FC, useState } from 'react'

interface Props {}

const Sort: FC<Props> = (): JSX.Element => {
  const [sort, setSort] = useState('one')

  const clickHandler = (tab: string) => {
    setSort(tab)
  }

  return (
    <div className='bg-white px-4 flex items-center gap-x-4 text-gray-500 rounded-lg'>
      <div className='bg-orange-100 p-1 rounded-md flex items-center justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-7 h-7 stroke-orange-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25'
          />
        </svg>
      </div>
      <button
        className={`${
          sort === 'one' ? 'text-slate-800 font-bold' : ''
        } py-4 relative`}
        onClick={() => clickHandler('one')}
      >
        <span>محبوب ترین</span>
        {sort === 'one' && (
          <span className='w-2 h-2 bg-orange-600 rounded-full absolute top-2 left-0'></span>
        )}
      </button>
      <button
        className={`${
          sort === 'two' ? 'text-slate-800 font-bold' : ''
        } py-4 relative`}
        onClick={() => clickHandler('two')}
      >
        <div>گران ترین</div>
        {sort === 'two' && (
          <span className='w-2 h-2 bg-orange-600 rounded-full absolute top-2 left-0'></span>
        )}
      </button>
      <button
        className={`${
          sort === 'three' ? 'text-slate-800 font-bold' : ''
        } py-4 relative`}
        onClick={() => clickHandler('three')}
      >
        <div>ارزان ترین</div>
        {sort === 'three' && (
          <span className='w-2 h-2 bg-orange-600 rounded-full absolute top-2 left-0'></span>
        )}
      </button>
      <button
        className={`${
          sort === 'four' ? 'text-slate-800 font-bold' : ''
        } py-4 relative`}
        onClick={() => clickHandler('four')}
      >
        <div>پرفروش ترین</div>
        {sort === 'four' && (
          <span className='w-2 h-2 bg-orange-600 rounded-full absolute top-2 left-0'></span>
        )}
      </button>
    </div>
  )
}

export default Sort
